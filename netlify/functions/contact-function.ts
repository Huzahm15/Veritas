import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = new URLSearchParams(event.body || "");
  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const service = params.get("service") || "Not specified";
  const message = params.get("message") || "";

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  try {
    const store = getStore("contact-submissions");
    const id = `submission-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

    await store.setJSON(id, {
      id,
      name,
      email,
      service,
      message,
      submittedAt: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Blob store error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save submission" }),
    };
  }
};
