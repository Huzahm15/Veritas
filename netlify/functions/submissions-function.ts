import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const ADMIN_KEY = process.env.ADMIN_KEY || "veritas-admin-2024";

export const handler: Handler = async (event) => {
  // Simple key-based auth via query param: /api/submissions?key=your-key
  const key = event.queryStringParameters?.key;
  if (key !== ADMIN_KEY) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
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

    // Sort newest first
    submissions.sort((a: any, b: any) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissions),
    };
  } catch (err) {
    console.error("Error fetching submissions:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch submissions" }),
    };
  }
};
