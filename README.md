# Portfolio — montaż wideo

## Uruchomienie

```bash
npm install
npm run dev
```

Build produkcyjny:

```bash
npm run build
npm run preview
```

## Do uzupełnienia przed publikacją

- `src/pages/index.astro`:
  - wszystkie nagłówki i akapity (hero, o mnie, certyfikat, praca, kontakt)
    to teraz dummy placeholdery ("Wstaw nagłówek sekcji." itp.) — podmień
    na własny tekst
  - tablica `videos` na górze pliku (w sekcji `---`) → podmień `id` każdego
    filmu na prawdziwe ID z YouTube (fragment z linku
    `youtube.com/watch?v=TO_JEST_ID`) i `title` na tytuł. Dodaj albo usuń
    wpisy w tablicy — grid dostosuje się sam.
  - tablica `people` na górze pliku → osoby, z którymi współpracowałeś.
    Podmień `name`, `role` i `links` (dowolna liczba linków social media na
    osobę). Dodaj albo usuń wpisy — grid dostosuje się sam.
  - `kontakt@twojadomena.pl` (dwa miejsca) → Twój prawdziwy e-mail
  - `https://youtube.com/@twoj-kanal` → link do Twojego kanału YT
  - `[uzupełnij datę]` w sekcji certyfikatu → data ukończenia kursu
  - zdjęcie certyfikatu → wrzuć swój plik (np. `certyfikat.jpg`) do `public/`
    i podmień `src="/certyfikat-placeholder.svg"` na `src="/certyfikat.jpg"`
- `astro.config.mjs`: `site` → docelowa domena (potrzebne pod SEO/sitemap)
- `public/favicon.svg`: zostaw albo podmień na własne logo

## Struktura

- `src/layouts/Layout.astro` — szkielet HTML, meta, fonty
- `src/components/SectionDivider.astro` — separator sekcji w stylu znacznika
  na osi czasu (timecode + „playhead”)
- `src/pages/index.astro` — cała strona (hero, o mnie, certyfikat, YouTube,
  kontakt)
- `src/styles/global.css` — tokeny designu (kolory, typografia, spacing) —
  wszystko jako zmienne CSS, łatwe do podmiany
