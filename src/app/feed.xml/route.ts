const updatedAt = "Sun, 11 Oct 2026 14:30:00 GMT";
const feedUrl = "https://puripuri.dev/feed.xml";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const title = "ぷりぷりのウェブサイト";
  const description = "ぷりぷりのポートフォリオ更新情報をお届けします。";
  const itemTitle = "ポートフォリオの更新情報をRSSで配信します";
  const itemDescription = "プロフィール、制作実績、スキル、趣味などの情報を掲載しているポートフォリオです。";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>https://puripuri.dev/</link>
    <description>${escapeXml(description)}</description>
    <language>ja</language>
    <lastBuildDate>${updatedAt}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />
    <item>
      <title>${escapeXml(itemTitle)}</title>
      <link>https://puripuri.dev/</link>
      <guid isPermaLink="false">portfolio-feed-2026-10-11</guid>
      <pubDate>${updatedAt}</pubDate>
      <description>${escapeXml(itemDescription)}</description>
    </item>
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
