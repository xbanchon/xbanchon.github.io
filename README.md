# Xavier Banchon Gonzalez, portfolio

Personal portfolio in English (`/`) and Spanish (`/es/`), built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Commands

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Runs the site locally, including drafts     |
| `npm run build`   | Builds the published site into `dist/`      |
| `npm run preview` | Serves the built site locally               |
| `npm run check`   | Type-checks the project                     |

## Editing content

- **Home page copy:** `src/i18n/content.ts`, with one block per language.
- **Case studies:** `src/content/case-studies/en/` and `es/`, one Markdown file per project in each language. Replace the bracketed text, then set `draft: false` in both versions. The page and its link on the home page then go live.
- **Resume download:** the PDFs are in `public/resume/`, one per language, and their paths are in the `resume` block of `src/i18n/content.ts`. To update one, replace the file under the same name. Published PDFs must not contain a phone number or photo. They do include education, which stays off the web pages.

## Deploying

Pushing to `main` builds and deploys the site through `.github/workflows/deploy.yml`. In the repository's settings, under **Pages**, set the source to **GitHub Actions**.
