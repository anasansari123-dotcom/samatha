import { ImageResponse } from "next/og";

export const alt = "Samatha Green Energy Solutions — Solar installation in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #071f3b 0%, #0A4D8D 58%, #125393 100%)",
          padding: "64px 72px",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#2dbd6e",
          }}
        >
          Samatha Green Energy Solutions
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Solar, storage, and clean energy for Bengaluru
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.82)", maxWidth: 820 }}>
            Rooftop solar, hybrid systems, and battery storage for homes, businesses, and industry.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.72)" }}>
          samatha.green
        </div>
      </div>
    ),
    size,
  );
}
