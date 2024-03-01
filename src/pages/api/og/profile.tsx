import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};
export default async function handler(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const image = searchParams.get("image");
  const events = parseInt(searchParams.get("events")!);
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsl(240 10% 3.9%)",
        }}
      >
        <div
          tw="flex"
          style={{
            color: "hsl(210 40% 98%)",
          }}
        >
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex items-center justify-between text-4xl font-bold gap-4 grow w-full">
              <img
                src={image!}
                tw="w-32 rounded-full"
                alt={username!}
              />
              <span tw="grow ml-8">@{username}</span>
              <span>
                {events} event{events > 1 ? "s" : ""} coming up
              </span>
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
