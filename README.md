# 🖋️ smyr.dev

My personal website and blog, where I write about software, work, and everything in between. Live at **[smyr.dev](https://smyr.dev)**.

It's a fast, static site with a content pipeline that lets me **write once and publish to multiple destinations** (Notion → this blog + Dev.to + Hashnode + Medium).

> Built on top of **[Calligra](https://github.com/ghalambaz/Calligra)** by [@ghalambaz](https://github.com/ghalambaz), which was my main inspiration and starting point. Calligra itself extends the excellent [Astro Resume Theme](https://github.com/wasutz/astro-resume-theme) by Wasut Panyawiphat. Huge thanks to both.

---

## 🚀 Features

- **Write once, publish anywhere:** Automation for syncing content from Notion and cross-posting Markdown articles to Medium, Dev.to, and Hashnode.
- **Modern stack:** Built with [Astro](https://astro.build/) for speed and styled with [Tailwind CSS](https://tailwindcss.com/) for easy customization.
- **Blog engine:** Native search, categories, and tags, plus a homepage widget showcasing the latest posts.
- **Performance first:** Lightweight architecture with strong Lighthouse/PageSpeed scores, responsive layouts, and built-in SEO.
- **Dark mode:** Seamless light/dark theme out of the box.

---

## 📦 Deployment & Compatibility Status

| Platform | Status | Notes |
| :--- | :--- | :--- |
| Astro (local) | ✅ Native | Fully supported |
| Dev.to | ✅ Compatible | Verified complete compatibility |
| Medium | ⚠️ Issues | Importer struggles with `<blockquote>`, `<code>`, and `<pre>` tags |
| Hashnode | ⏳ Pending | Awaiting testing; markdown generation only |

---

## 🛠️ Getting Started

### Prerequisites

This project uses `bun` as its primary package manager, though you can substitute `npm`, `pnpm`, or `yarn`.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/smyrdev/smyr.dev.git
   cd smyr.dev
   ```
2. **Install dependencies:**
   ```bash
   bun install
   ```
3. **Start the dev server:**
   ```bash
   bun run dev
   ```

Open http://localhost:4321 in your browser to view the site.

---

## 🧞 Commands

| Make | Action |
| :--- | :--- |
| `make run` | Starts local dev server at `localhost:4321` |
| `make build` | Build your production site into the output directory |
| `make sync` | Pull content from Notion and generate Markdown posts |
| `make deploy` | Push your production content to the remote repo (GitHub Pages) |

---

## Content Sync and Publishing Automation

The project includes a Notion sync command and a set of make targets for publishing posts to external platforms.

### Command Table

| Command | Description | Required Arguments | Status |
| :--- | :--- | :--- | :--- |
| `make sync` | Pull posts from Notion and write them to `src/content/blog`. | `NOTION_TOKEN`, `NOTION_DATABASE_ID` | Ready |
| `make publish` | Scan all posts; process changed ones. | None | Ready |
| `make publish-one` | Force process a specific post. | `slug` | Ready |
| `make set-meta` | Modify frontmatter for a specific post. | `slug`, `key`, `value` | Ready |
| `make hash-show` | View all tracking hashes and status. | None | Ready |
| `make hash-reset` | Reset cache hash for one specific post. | `slug` | Ready |
| `make hash-reset-all` | Reset cache hashes for all posts. | None | Ready |

### Notes

`make sync` reads `NOTION_TOKEN` and `NOTION_DATABASE_ID` from your environment before generating posts.

`make publish` and the other publishing targets are available through the `bin/publish` script.

---

## ⚖️ License & Acknowledgments

- **Source Code:** Licensed under the [MIT License](LICENSE).
- **Content & Articles:** All written content, articles, and media under `src/content/` are licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](src/content/LICENSE-CONTENT).

### Credits

This site is built on **[Calligra](https://github.com/ghalambaz/Calligra)** by [@ghalambaz](https://github.com/ghalambaz), which served as the main inspiration and foundation. Calligra is itself an extended variant of the [astro-resume-theme](https://github.com/wasutz/astro-resume-theme) created by Wasut Panyawiphat. Both are distributed under the MIT License, and I'm grateful for their work.
