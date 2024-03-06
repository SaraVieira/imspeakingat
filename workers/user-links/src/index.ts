const PASSTHROUGH_PATHS = ["/api"];

export default {
  async fetch(request: Request) {
    async function MethodNotAllowed(request: Request) {
      return new Response(`Method ${request.method} not allowed.`, {
        status: 405,
        headers: {
          Allow: "GET",
        },
      });
    }
    // Only GET requests work with this proxy.
    if (request.method !== "GET") return MethodNotAllowed(request);

    let url = "";
    const subdomain = request.url
      .toString()
      .split(".")
      .slice(0, -2)
      .join(".")
      .split("https://")[1];
    if (
      !PASSTHROUGH_PATHS.some((p) =>
        new URL(request.url).pathname.startsWith(p),
      )
    ) {
      url = `https://imspeaking.at/u/${subdomain}`;
    }
    const a = await fetch(url);
    const html = await a.clone().text();
    return new Response(
      html.replaceAll("/_next/static/", "https://imspeaking.at/_next/static/"),
      {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      },
    );
  },
};
