// Netlify Function: log a sent outreach to Notion.
// 1. Creates an Outreach Log entry linked to the Contact
// 2. Creates a follow-up Task due 5 days out, linked to the Contact and Outreach Log

const OUTREACH_DS = "46d25050-6788-440e-ba0a-5b940be5341c";
const TASKS_DS = "165674c2-6436-8161-8fd8-000bc014f0c5";

export default async (req) => {
  if (req.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const token = process.env.NOTION_TOKEN;
  if (!token) {
    return json(500, { error: "NOTION_TOKEN not configured." });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const contactId = (body.contactId || "").toString().trim();
  const contactName = (body.contactName || "").toString().trim();
  const message = (body.message || "").toString().trim();
  const hook = (body.hook || "").toString().trim();
  const isConnectionNote = body.connectionNote === true;

  if (!contactId || !contactName || !message) {
    return json(400, { error: "contactId, contactName, and message are required" });
  }

  const today = new Date().toISOString().slice(0, 10);
  const followUp = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const taskType = isConnectionNote ? "LinkedIn Connection Follow Up" : "LinkedIn Message Follow Up";

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Notion-Version": "2025-09-03",
    "Content-Type": "application/json",
  };

  try {
    // 1. Create Outreach Log entry
    const outreachRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers,
      body: JSON.stringify({
        parent: { type: "data_source_id", data_source_id: OUTREACH_DS },
        properties: {
          "Contact Name": { title: [{ text: { content: contactName } }] },
          "Contact": { relation: [{ id: contactId }] },
          "Channel": { select: { name: "LinkedIn DM" } },
          "Date Sent": { date: { start: today } },
          "Follow Up Date": { date: { start: followUp } },
          "Follow Up Done": { select: { name: "No" } },
          "Hook Used": { rich_text: [{ text: { content: hook || "" } }] },
          "Message Sent": { rich_text: [{ text: { content: message.slice(0, 2000) } }] },
          "Status": { select: { name: "Sent" } },
        },
      }),
    });

    if (!outreachRes.ok) {
      const errText = await outreachRes.text();
      return json(outreachRes.status, { error: "Outreach Log create failed", detail: errText });
    }
    const outreachPage = await outreachRes.json();

    // 2. Create follow-up Task
    const taskRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers,
      body: JSON.stringify({
        parent: { type: "data_source_id", data_source_id: TASKS_DS },
        properties: {
          "Task name": { title: [{ text: { content: `Follow up: ${contactName}` } }] },
          "Due": { date: { start: followUp } },
          "Status": { status: { name: "Due" } },
          "Task Type": { select: { name: taskType } },
          "Priority": { select: { name: "Medium" } },
          "Contacts": { relation: [{ id: contactId }] },
          "Outreach Log": { relation: [{ id: outreachPage.id }] },
        },
      }),
    });

    if (!taskRes.ok) {
      const errText = await taskRes.text();
      return json(taskRes.status, {
        error: "Task create failed (Outreach Log was created)",
        detail: errText,
        outreachId: outreachPage.id,
      });
    }
    const taskPage = await taskRes.json();

    return json(200, {
      ok: true,
      outreachId: outreachPage.id,
      taskId: taskPage.id,
      followUp,
    });
  } catch (err) {
    return json(500, { error: "Notion write failed", detail: err.message || String(err) });
  }
};

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
