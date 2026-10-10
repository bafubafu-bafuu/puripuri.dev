import Script from "next/script";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="ぷりぷり ホーム">ぷりぷりのウェブサイト</a>
        <nav aria-label="メインナビゲーション">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="portfolio">
        <section className="section about" id="about" aria-labelledby="about-title">
          <h1 className="section-title" id="about-title">About</h1>
          <div className="section-content about-copy">
            <p>
              DONUTSで「<a href="https://mixch.tv/" target="_blank" rel="noopener noreferrer">ミクチャ</a>」のWeb・サーバー開発をしています。
            </p>
            <p>
              フロントエンドはTypeScriptとNext.js・React、バックエンドはGo・MySQLを使っています。インフラにはAWSを利用しています。
            </p>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 className="section-title" id="projects-title">Projects</h2>
          <div className="section-content work-list">
            <a className="work-item" href="https://chromewebstore.google.com/detail/pixiv-image-fitter/mggjlpeionekapajjdlgnkkpdaanialb" target="_blank" rel="noopener noreferrer">
              <span className="work-year">Chrome</span>
              <span className="work-description">
                <strong>Pixiv Image Fitter</strong>
                <span>pixivの画像を画面サイズに合わせて表示する拡張機能</span>
              </span>
              <span className="work-stack">Chrome Extension</span>
            </a>
            <div className="work-item">
              <span className="work-year">Personal</span>
              <span className="work-description">
                <strong>Discord Bot</strong>
                <span>valorantの試合結果やVTuberのライブ配信、原神やゼンゼロといったゲームの最新情報を通知する便利なbotを運用中</span>
              </span>
              <span className="work-stack">Discord</span>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <h2 className="section-title" id="skills-title">Skills</h2>
          <div className="section-content skill-list">
            <div className="skill-group">
              <span>Frontend</span>
              <p>TypeScript / Next.js / React</p>
            </div>
            <div className="skill-group">
              <span>Backend</span>
              <p>Go / MySQL / Firebase</p>
            </div>
            <div className="skill-group">
              <span>Infrastructure</span>
              <p>AWS / Cloudflare</p>
            </div>
            <div className="skill-group">
              <span>Tools</span>
              <p>Figma</p>
            </div>
          </div>
        </section>

        <section className="section" id="hobbies" aria-labelledby="hobbies-title">
          <h2 className="section-title" id="hobbies-title">Hobbies</h2>
          <div className="section-content hobby-content">
            <div className="hobby-item">
              <p>自作PCやガジェット関連が好きです。</p>
              <iframe
                className="hobby-video"
                src="https://www.youtube.com/embed/QR4TvmerkYo?si=czn6vk6j9F7JSrFQ"
                title="自作PC・ガジェット関連の動画"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                width="560"
                height="315"
              />
              <iframe
                className="hobby-video"
                src="https://www.youtube.com/embed/T6wUH6SvAU0?si=Tm0tKW_qQtL12y5r"
                title="自作PCの紹介動画"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                width="560"
                height="315"
              />
            </div>
            <div className="hobby-item">
              <p>音楽ゲームも好きで、最近は「ホロドリ」をプレイしています。使用端末は iPad Pro 12.9インチ（M1）です。</p>
              <div className="x-post-frame">
                <blockquote className="twitter-tweet x-post" data-theme="dark">
                  <p lang="ja" dir="ltr">
                    ホロドリ全曲全難易度APしました！<br />
                    多分8人目だと思います！<br />
                    #ホロドリ <a href="https://t.co/Fqdw6Dsm9h">pic.twitter.com/Fqdw6Dsm9h</a>
                  </p>
                  &mdash; ゆーずき (@holodori_suki){" "}
                  <a href="https://x.com/holodori_suki/status/2086922868999569441?ref_src=twsrc%5Etfw">2026年8月10日</a>
                </blockquote>
                <Script src="https://platform.x.com/widgets.js" strategy="lazyOnload" />
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <h2 className="section-title" id="contact-title">Contact</h2>
          <div className="section-content contact-content">
            <p className="contact-note">お仕事のご相談やご質問など、お気軽にどうぞ。</p>
            <a className="contact-primary" href="mailto:bafubafu_bafuu@puripuri.dev">
              bafubafu_bafuu@puripuri.dev <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-links">
              <a href="https://github.com/bafubafu-bafuu" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://x.com/bafubafu_bafuu" target="_blank" rel="noopener noreferrer">X <span aria-hidden="true">↗</span></a>
              <a href="https://www.youtube.com/@bafubafu_bafuu" target="_blank" rel="noopener noreferrer">YouTube <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
        <footer className="site-footer">© 2026 bafubafu_bafuu</footer>
      </main>
    </>
  );
}
