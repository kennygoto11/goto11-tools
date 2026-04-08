// Netlify Function: pull 3 qualified leads from Notion Contacts DB.
// Filters: Status in [Lead, Nurture], Archive != true, Filter field NOT empty.
// Sort: Last edited time ascending (longest-untouched first).

const CONTACTS_DS = "165674c2-6436-81cf-9fef-000b57782427";

export default async (req) => {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    return json(500, { error: "NOTION_TOKEN not configured in Netlify env vars." });
  }

  try {
    const res = await fetch(`https://api.notion.com/v1/data_sources/${CONTACTS_DS}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Notion-Version": "2025-09-03",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          and: [
            { property: "Status", select: { equals: "Lead" } },
            { property: "Archive", checkbox: { equals: false } },
            { property: "Filter", rich_text: { is_not_empty: true } },
          ],
        },
        sorts: [{ timestamp: "last_edited_time", direction: "ascending" }],
        page_size: 3,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return json(res.status, { error: "Notion query failed", detail: errText });
    }

    const data = await res.json();
    const leads = (data.results || []).map((p) => {
      const props = p.properties || {};
      return {
        id: p.id,
        name: plain(props.Name),
        title: plain(props.Title),
        linkedin: props.Linkedin?.url || "",
        email: props.Email?.email || "",
        filter: plain(props.Filter),
        status: props.Status?.select?.name || "",
        lastEdited: p.last_edited_time,
      };
    });

    return json(200, { leads });
  } catch (err) {
    return json(500, { error: "Notion fetch failed", detail: err.message || String(err) });
  }
};

function plain(prop) {
  if (!prop) return "";
  const arr = prop.title || prop.rich_text || [];
  return arr.map((t) => t.plain_text || "").join("").trim();
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
