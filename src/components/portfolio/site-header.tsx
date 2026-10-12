import SiteNavigation from "./site-navigation";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#about" aria-label="ぷりぷり ホーム">
        ぷりぷりのウェブサイト
      </a>
      <SiteNavigation />
    </header>
  );
}
