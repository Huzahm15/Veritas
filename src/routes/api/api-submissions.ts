import { createAPIFileRoute } from "@tanstack/react-start/api";
import { getStore } from "@netlify/blobs";

const ADMIN_KEY = process.env.ADMIN_KEY || "veritas-admin-2024";

export const APIRoute = createAPIFileRoute("/api/submissions")({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (key !== ADMIN_KEY) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const store = getStore("contact-submissions");
      const { blobs } = await store.list();

      const submissions = await Promise.all(
        blobs.map(async (blob) => {
          const data = await store.get(blob.key, { type: "json" });
          return data;
        })
      );

      submissions.sort(
        (a: any, b: any) =>
          new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      );

      return new Response(JSON.stringify(submissions), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Error fetching submissions:", err);
      return new Response(JSON.stringify({ error: "Failed to fetch submissions" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});
