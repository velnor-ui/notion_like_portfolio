import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Developer Portfolio";
  const path = searchParams.get("path") || "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #18181b 0%, #1e293b 100%)",
          color: "white",
          padding: "60px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            marginBottom: 24,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.7 }}>{path}</div>
        <div style={{ position: "absolute", top: 60, right: 60 }}>
          <img
            src="https://yourdomain.com/logo.svg"
            width={80}
            height={80}
            alt="Logo"
            style={{ borderRadius: 16 }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await fetch(
            "https://rsms.me/inter/font-files/Inter-Bold.woff",
          ).then((res) => res.arrayBuffer()),
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
