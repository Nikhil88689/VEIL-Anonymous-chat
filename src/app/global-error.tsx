"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#07070b", color: "#f8fafc", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ display: "grid", minHeight: "100svh", placeItems: "center", padding: "2rem", textAlign: "center" }}>
          <div>
            <p style={{ color: "#c4b5fd", fontSize: "0.75rem", letterSpacing: "0.2em" }}>VEIL</p>
            <h1 style={{ fontSize: "2rem", fontWeight: 500 }}>Something interrupted VEIL.</h1>
            <p style={{ color: "#858599", lineHeight: 1.6 }}>The app could not start this page. Please try again.</p>
            <button
              onClick={reset}
              style={{ marginTop: "1rem", border: "1px solid #ffffff22", borderRadius: "999px", background: "#ffffff0b", color: "white", cursor: "pointer", padding: "0.75rem 1.25rem" }}
              type="button"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
