export default function Home() {
  return (
    <main>
      <header>
        <h1>puripuri.dev</h1>
        <p>Software Engineer</p>
      </header>

      <hr />

      <section>
        <h2>About</h2>
        <p>
          I build software and systems. Focus on simplicity, performance, and reliability.
        </p>
      </section>

      <section>
        <h2>Links</h2>
        <ul>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
        </ul>
      </section>

      <hr />

      <footer>
        <p>&copy; {new Date().getFullYear()} puripuri.dev</p>
      </footer>
    </main>
  );
}
