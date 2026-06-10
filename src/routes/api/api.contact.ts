import { createAPIFileRoute } from "@tanstack/react-start/api";
import { getStore } from "@netlify/blobs";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    const body = await request.text();
    const params = new URLSearchParams(body);

    const name = params.get("name") || "";
    const email = params.get("email") || "";
    const service = params.get("service") || "Not specified";
    const message = params.get("message") || "";

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
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

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Blob store error:", err);
      return new Response(JSON.stringify({ error: "Failed to save submission" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});
