import { Readable } from "nodemailer/lib/xoauth2";
import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
  const links = [
    {
      url: "/",
      changefreq: "daily",
      priority: 1,
    },
    {
      url: "/demo",
      changefreq: "daily",
      priority: 1,
    },
    {
      url: "/hire",
      changefreq: "daily",
      priority: 0.1,
    },
    {
      url: "/service",
      changefreq: "daily",
      priority: 0.5,
    },
    {
      url: "/about-us",
      changefreq: "daily",
      priority: 0.5,
    },
    {
      url: "/contact",
      changefreq: "daily",
      priority: 0.5,
    },
  ];
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });
  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());
  res.end(xmlString);
};
