// Netlify Function: draft a LinkedIn DM using Claude.
// Called from to-get-to-11.html. The Anthropic API key is read from
// the ANTHROPIC_API_KEY environment variable set in the Netlify dashboard.

import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are drafting LinkedIn direct messages on behalf of Kenny Solway, founder of Go To 11 — a Toronto-based Decision Acceleration Partner who helps senior leaders move faster on high-stakes decisions.

VOICE
- Direct, warm, lightly irreverent. Confident without being slick.
- Canadian English (behaviour, organisation, colour).
- No emojis, no exclamation marks, no corporate jargon, no "I hope this finds you well", no "I came across your profile".
- Short sentences. One idea per sentence.
- Sound like a real human writing to another real human, not a sales rep running a play.

STRUCTURE (LinkedIn DM, 3-5 sentences max, around 60-90 words)
1. Open with the specific thing — reference the trigger, filter, or relationship hook directly. No throat-clearing.
2. One sentence of context that shows you actually know them or noticed something real.
3. One sentence offering value or asking a real question about their world. Never pitch a meeting in the first message.
4. Sign off naturally. No "Best regards." Just "— Kenny" or similar.

REASON-SPECIFIC GUIDANCE
- TRIGGER: Reference the specific event (post, comment, promotion, announcement). Reactive, timely, specific to what just happened. Then ask one question about their world.
- FILTER: Reference something you know about them that others wouldn't — a niche, a project, a shared connection. Specific and personal, not generic industry talk.
- RELATIONSHIP: Acknowledge the gap honestly. Reference something they care about. Ask what's live for them right now.

PROOF BANK (use only if directly relevant — never shoehorn)
- Promotion & executive presence: Helped a senior director earn a VP promotion in under 6 months by reshaping how they showed up in board meetings.
- Revenue conversion: Worked with a founder to convert a stuck $2M deal into a closed contract by rewriting their decision narrative.
- Board presence: Coached a CEO through their first board chair transition, including the hardest conversations with legacy directors.
- TED & high-stakes presentations: Prepared a speaker for a TEDx talk that hit 200K+ views in the first month.
- Scale proof: Have done this work with 100+ senior leaders across tech, finance, healthcare, and nonprofits.

OUTPUT
Return ONLY the message text. No preamble, no "Here's a draft:", no signature instructions, no commentary. Just the DM itself, ready to paste into LinkedIn.`;

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error:
          "ANTHROPIC_API_KEY is not configured on the server. Add it in Netlify → Site settings → Environment variables.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = (body.name || "").toString().trim();
  const reason = (body.reason || "").toString().trim();
  const context = (body.context || "").toString().trim();

  if (!name) {
    return new Response(JSON.stringify({ error: "Contact name is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const userMessage = `Draft a LinkedIn DM to: ${name}
Reason for outreach: ${reason || "(none specified — make a reasonable choice)"}
Context: ${context || "(none provided — keep it general but still specific to the person)"}

Write the DM now. Output only the message text.`;

  try {
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return new Response(JSON.stringify({ draft: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Anthropic API call failed",
        detail: err.message || String(err),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
