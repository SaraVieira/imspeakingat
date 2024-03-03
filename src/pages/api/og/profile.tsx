import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";
import Logo from "~/components/icons/logo";

export const config = {
  runtime: "edge",
};
export default async function handler(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const image = searchParams.get("image");
  const events = parseInt(searchParams.get("events")!);
  const fontData = await fetch(
    new URL(
      "https://cdn.jsdelivr.net/npm/inter-font@3.19.0/ttf/Inter-Medium.ttf",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  console.log(fontData);
  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full p-12 flex-col items-center justify-between"
        style={{
          fontFamily: "Inter",
          backgroundColor: "#09090B",
        }}
      >
        <div tw="flex flex-col justify-center items-center text-zinc-50 grow">
          <img
            src={image!}
            tw="w-64 border-[10px] border-zinc-50 rounded-full"
            alt={username!}
          />
          <h2 tw="flex items-center justify-between text-6xl font-black w-full">
            @{username}
          </h2>
          <span tw="text-xl">
            {events} event{events > 1 ? "s" : ""} coming up
          </span>
        </div>
        <footer tw="flex items-center justify-end w-full text-zinc-50">
          <Logo tw="w-32" />
        </footer>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
