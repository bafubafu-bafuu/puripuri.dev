export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <h1 className="section-title" id="about-title">
        About
      </h1>
      <div className="section-content about-copy">
        <p>
          DONUTSで「
          <a href="https://mixch.tv/" target="_blank" rel="noopener noreferrer">
            ミクチャ
          </a>
          」のWeb・サーバー開発をしています。
        </p>
        <p>
          フロントエンドはTypeScriptとNext.js・React、バックエンドはGo・MySQLを使っています。インフラにはAWSを利用しています。
        </p>
      </div>
    </section>
  );
}
