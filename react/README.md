# Alberta Space Program

Satirical multi-page site for a fictional private organization that claims **bigger rockets from 2026** and a **Moon landing by 2030**.

**Not affiliated** with the University of Alberta, AlbertaSat, UASTARR / STARR, or any real club or institution. Campus links are factual pointers only.

## Setup

```bash
cd react
npm install
npm run dev
```

## Pages

| Path | Page |
|------|------|
| `/` | Home — Moon by 2030 pitch |
| `/mission` | Bold lunar mission claims |
| `/roadmap` | 2026→2030 rocket escalation |
| `/focus` | Bigger rockets / Moon / prairie lore |
| `/campus` | Real AlbertaSat + UASTARR facts (no affiliation) |
| `/team` | Fictional crew |
| `/events` | Fictional pad events |
| `/locations` | Fictional field sites |
| `/resources` | Real campus links & videos |
| `/participate` | Satirical join paths |
| `/contact` | Fake inbox |

`/albertasat` and `/ambition` redirect to `/campus` and `/roadmap`.

## GitHub Pages

Pushes to `main` deploy via [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml).

The build copies `index.html` to `404.html` so client-side routes work on GitHub Pages.

## Stack

- React 19 + TypeScript + Vite
- React Router
- `@abgov/react-components` (UI kit only — not an official institutional site)
- Ionicons via `GoabIcon`
