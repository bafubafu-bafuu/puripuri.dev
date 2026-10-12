function RssIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="19" r="2" />
      <path d="M3 10v3a8 8 0 0 1 8 8h3A11 11 0 0 0 3 10Z" />
      <path d="M3 3v3c8.284 0 15 6.716 15 15h3C21 11.059 12.941 3 3 3Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        transform="translate(1.2 1.2) scale(0.9)"
        d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 1.8 3.3 1.28.1-.73.4-1.22.73-1.5-2.51-.29-5.15-1.26-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.75 10.75 0 0 1 5.64 0c2.16-1.46 3.1-1.16 3.1-1.16.62 1.56.23 2.72.12 3 .72.79 1.15 1.8 1.15 3.03 0 4.34-2.64 5.3-5.16 5.58.41.36.78 1.04.78 2.1v3.13c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.45L5.53 22H2.4l7.25-8.29L1.8 2h6.4l4.43 6.96L18.9 2Zm-1.1 17.86h1.73L7.27 4.03H5.4L17.8 19.86Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.57 12 3.57 12 3.57s-7.55 0-9.4.51A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.1 2.12c1.85.51 9.4.51 9.4.51s7.55 0 9.4-.51a3 3 0 0 0 2.1-2.12c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8ZM9.55 15.6V8.4L15.8 12l-6.25 3.6Z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://github.com/bafubafu-bafuu",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://x.com/bafubafu_bafuu",
    label: "X",
    Icon: XIcon,
  },
  {
    href: "https://www.youtube.com/@bafubafu_bafuu",
    label: "YouTube",
    Icon: YouTubeIcon,
  },
];

export default function ContactSection() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <h2 className="section-title" id="contact-title">
        Contact
      </h2>
      <div className="section-content contact-content">
        <p className="contact-note">お仕事のご相談やご質問など、お気軽にどうぞ。</p>
        <a className="contact-primary" href="mailto:bafubafu_bafuu@puripuri.dev">
          bafubafu_bafuu@puripuri.dev <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-links">
          <a className="social-link" href="/feed.xml" aria-label="RSSフィードを購読" title="RSSフィードを購読">
            <RssIcon />
          </a>
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              className="social-link"
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
