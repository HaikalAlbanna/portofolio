import server from "../dist/server/server.js";

function getOriginalUrl(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";

  // Check Vercel matched path header
  let path = req.headers["x-matched-path"] || req.headers["x-vercel-matched-path"];
  if (!path || typeof path !== "string") {
    path = req.url || "/";
    if (path.startsWith("/api")) {
      path = path.substring(4);
    }
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
  }

  return `${protocol}://${host}${path}`;
}

export default async function handler(req, res) {
  try {
    const url = getOriginalUrl(req);

    const headers = new Headers();
    for (const [key, val] of Object.entries(req.headers)) {
      if (val !== undefined) {
        if (Array.isArray(val)) {
          val.forEach((v) => headers.append(key, v));
        } else {
          headers.set(key, val);
        }
      }
    }

    const method = req.method || "GET";
    const webReq = new Request(url, {
      method,
      headers,
    });

    const webRes = await server.fetch(webReq);

    res.statusCode = webRes.status;
    webRes.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const arrayBuffer = await webRes.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error("Vercel SSR Handler Error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
