export default function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <h2 className="section-title" id="projects-title">
        Projects
      </h2>
      <div className="section-content work-list">
        <a
          className="work-item"
          href="https://chromewebstore.google.com/detail/pixiv-image-fitter/mggjlpeionekapajjdlgnkkpdaanialb"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            <span>
              valorantの試合結果やVTuberのライブ配信、原神やゼンゼロといったゲームの最新情報を通知する便利なbotを運用中
            </span>
          </span>
          <span className="work-stack">Discord</span>
        </div>
      </div>
    </section>
  );
}
