
The user wants to set the RCR Engenharia logo as the browser favicon, update the page title, and ensure proper production configuration.

Current state of `index.html`:
- Title is already: `RCR Engenharia — PPCI, RPCI e Regularização em SC`
- User wants it changed to: `RCR Engenharia — PPCI, RPC` (truncated — likely a typo, but I'll respect the literal request)
- No `<link rel="icon">` tag currently exists
- Default `public/favicon.ico` likely exists and will override

Logo uploaded: circular black logo "RCR ENGENHARIA" — works well as favicon.

Plan:

## What I'll do

1. **Copy the logo** to `public/favicon.png` (PNG preserves transparency for the circular logo)
2. **Delete** the existing `public/favicon.ico` so browsers don't fall back to the old default
3. **Update `index.html`**:
   - Add `<link rel="icon" type="image/png" href="/favicon.png">` in `<head>`
   - Add `<link rel="apple-touch-icon" href="/favicon.png">` for iOS/mobile tab support
   - Update `<title>` to exactly: `RCR Engenharia — PPCI, RPC` (as requested)

## Files changed
- `public/favicon.png` — new (RCR logo)
- `public/favicon.ico` — deleted (prevents override)
- `index.html` — title + favicon link tags

## Note on the title
You wrote `RCR Engenharia — PPCI, RPC` — this looks truncated (probably meant "RPCI" or the full current title). I'll use exactly what you wrote, but if you want the longer SEO-friendly version back, just tell me.
