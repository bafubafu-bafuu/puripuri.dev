import Script from "next/script";

const videos = [
  {
    src: "https://www.youtube.com/embed/QR4TvmerkYo?si=czn6vk6j9F7JSrFQ",
    title: "自作PC・ガジェット関連の動画",
  },
  {
    src: "https://www.youtube.com/embed/T6wUH6SvAU0?si=Tm0tKW_qQtL12y5r",
    title: "自作PCの紹介動画",
  },
];

export default function HobbiesSection() {
  return (
    <section className="section" id="hobbies" aria-labelledby="hobbies-title">
      <h2 className="section-title" id="hobbies-title">
        Hobbies
      </h2>
      <div className="section-content hobby-content">
        <div className="hobby-item">
          <p>自作PCやガジェット関連が好きです。</p>
          {videos.map((video) => (
            <iframe
              className="hobby-video"
              key={video.src}
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              width="560"
              height="315"
            />
          ))}
        </div>
        <div className="hobby-item">
          <p>音楽ゲームも好きで、最近は「ホロドリ」をプレイしています。使用端末は iPad Pro 12.9インチ（M1）です。</p>
          <div className="x-post-frame">
            <blockquote className="twitter-tweet x-post" data-theme="dark">
              <p lang="ja" dir="ltr">
                ホロドリ全曲全難易度APしました！
                <br />
                多分8人目だと思います！
                <br />
                #ホロドリ <a href="https://t.co/Fqdw6Dsm9h">pic.twitter.com/Fqdw6Dsm9h</a>
              </p>
              &mdash; ゆーずき (@holodori_suki){" "}
              <a href="https://x.com/holodori_suki/status/2086922868999569441?ref_src=twsrc%5Etfw">
                2026年8月10日
              </a>
            </blockquote>
            <Script src="https://platform.x.com/widgets.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>
    </section>
  );
}
