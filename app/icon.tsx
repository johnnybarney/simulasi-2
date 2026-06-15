import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "linear-gradient(135deg, #c5013c, #b64cf7)",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 36,
          color: "white",
          letterSpacing: "-1px",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
