import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin — Veritas Consultation" }],
  }),
  component: Admin,
});

interface Submission {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  submittedAt: string;
}

function Admin() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);

  const fetchSubmissions = async (adminKey: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/.netlify/functions/submissions?key=${encodeURIComponent(adminKey)}`);
      if (res.status === 401) {
        setError("Invalid admin key.");
        setAuthed(false);
        return;
      }
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSubmissions(data);
      setAuthed(true);
    } catch {
      setError("Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h1 className="font-display text-2xl text-charcoal">Admin Access</h1>
          <p className="mt-1 text-sm text-muted-foreground">Enter your admin key to view submissions.</p>
          <input
            type="password"
            placeholder="Admin key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchSubmissions(key)}
            className="mt-5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
          <button
            onClick={() => fetchSubmissions(key)}
            disabled={loading || !key}
            className="mt-4 w-full rounded-full gold-gradient px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50"
          >
            {loading ? "Loading…" : "View Submissions"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl text-charcoal">Submissions</h1>
            <p className="mt-1 text-sm text-muted-foreground">{submissions.length} total</p>
          </div>
          <button
            onClick={() => fetchSubmissions(key)}
            className="rounded-full border border-gold px-4 py-2 text-sm text-charcoal hover:bg-champagne/60"
          >
            Refresh
          </button>
        </div>

        {submissions.length === 0 ? (
          <div className="mt-16 text-center text-muted-foreground">No submissions yet.</div>
        ) : (
          <div className="mt-8 grid gap-4">
            {submissions.map((s) => (
              <div
                key={s.id}
                onClick={() => setSelected(selected?.id === s.id ? null : s)}
                className="cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-charcoal">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full bg-champagne px-3 py-1 text-xs text-gold-deep">
                      {s.service}
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground">{formatDate(s.submittedAt)}</p>
                  </div>
                </div>

                {selected?.id === s.id && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Message</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal whitespace-pre-wrap">{s.message}</p>
                    <a
                      href={`mailto:${s.email}?subject=Re: Your enquiry — Veritas Consultation`}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-flex items-center gap-2 rounded-full gold-gradient px-4 py-2 text-xs font-medium text-white"
                    >
                      Reply via Email
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
