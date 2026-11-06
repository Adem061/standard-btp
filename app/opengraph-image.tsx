import { ImageResponse } from "next/og";
export const alt = "Standard : vos réponses aux clients en un clic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#14213D", color: "#F7F5F0", padding: 80 }}>
        <div style={{ fontSize: 40, color: "#F2B705", fontWeight: 700 }}>Standard</div>
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05, marginTop: 20 }}>Arrêtez de retaper les mêmes réponses à vos clients.</div>
      </div>
    ),
    size
  );
}
