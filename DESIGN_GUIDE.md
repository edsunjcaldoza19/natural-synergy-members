# Natural Synergy Page Design Guide

This is the project source of truth for new pages. Read this file before inspecting screenshots or writing markup. Reuse the shared shell and tokens first, then add only the page-specific content. This keeps page work consistent and avoids spending tokens rediscovering the same layout.

## 1. Project direction

- Product: calm, practical wellness membership portal for existing members.
- Build: static HTML, one shared CSS file, one shared JavaScript file, no framework and no npm dependency.
- Design mode: redesign-preserve. Keep the current information architecture, copy voice, brand assets, screenshot proportions, and URL slugs unless the user explicitly asks for a change.
- Theme: light only.
- Design dials: variance 4/10, motion 2/10, density 5/10.
- Visual character: content-first, warm, trustworthy, spacious, and functional. Use the existing olive and orange brand palette. Do not replace it with a generic purple, glass, gradient, or dashboard theme.
- Use real supplied images and media. Never invent replacement artwork, placeholder screenshots, or fake product claims.

## 2. Shared files and page inventory

Every page must load exactly these local resources:

```html
<link rel="stylesheet" href="assets/css/main.css">
<script src="assets/js/main.js" defer></script>
```

External head resources are allowed only for:

- Montserrat from Google Fonts, weights 400, 500, 600, 700 and italic 400/600.
- Font Awesome Free 7.3.1 from cdnjs, including the current `integrity`, `crossorigin="anonymous"`, and `referrerpolicy="no-referrer"` attributes already used by the project.

Current pages:

| Page | File | `data-page` |
| --- | --- | --- |
| Home | `index.html` | `home` |
| Natural Synergy Program | `natural-synergy-program.html` | `program` |
| Natural Synergy App | `natural-synergy-app.html` | `app` |
| Bonus 1 | `bonus-1-blood-pressure-balancer.html` | `bonus1` |
| Bonus 2 | `bonus-2-eastern-metabolism-miracle.html` | `bonus2` |
| Bonus 3 | `bonus-3-acu-facelift-revitalizer.html` | `bonus3` |
| Total Life Mastery | `total-life-mastery.html` | `mastery` |
| VIP Club | `vip-club.html` | `vip` |
| Inner Game of Wealth | `inner-game-of-wealth.html` | `wealth` |
| Video Tutorials | `video-tutorials.html` | `tutorials` |
| Support Request | `support-request.html` | `support` |
| Purchase Inner Game of Wealth | `purchase-inner-game-of-wealth.html` | `wealth` |
| Purchase Total Life Mastery | `total-life-mastery-upgrade.html` | `mastery` |
| VIP Club Issue 1 | `vip-club/issue-1.html` | `vip` |
| VIP Club Issue 2 | `vip-club/issue-2.html` | `vip` |
| VIP Club Issue 3 | `vip-club/issue-3.html` | `vip` |
| VIP Club Issue 4 | `vip-club/issue-4.html` | `vip` |
| VIP Club Issue 5 | `vip-club/issue-5.html` | `vip` |
| VIP Club Issue 6 | `vip-club/issue-6.html` | `vip` |
| VIP Club Issue 7 | `vip-club/issue-7.html` | `vip` |
| VIP Club Issue 8 | `vip-club/issue-8.html` | `vip` |
| VIP Club Issue 9 | `vip-club/issue-9.html` | `vip` |
| VIP Club Issue 10 | `vip-club/issue-10.html` | `vip` |
| VIP Club Issue 11 | `vip-club/issue-11.html` | `vip` |
| VIP Club Issue 12 | `vip-club/issue-12.html` | `vip` |

Use the exact sidebar slugs below. Do not create alternate spellings:

```text
natural-synergy-program
natural-synergy-app
bonus-1-blood-pressure-balancer
bonus-2-eastern-metabolism-miracle
bonus-3-acu-facelift-revitalizer
total-life-mastery
vip-club
inner-game-of-wealth
video-tutorials
support-request
```

## UI refinement addendum

The preserve-first redesign keeps the existing light theme, olive/orange brand palette, copy, imagery, routes, and navigation order. Visual improvements are implemented through the shared stylesheet and script only.

- Design dials: variance 4/10, motion 2/10, density 4/10.
- Wide desktop (`min-width: 1200px`) keeps the recognizable sidebar/content relationship while using a fluid shell gap instead of a fixed whitespace column.
- Tablet (`768px-1199px`) stacks the shell and exposes the accessible sidebar toggle.
- Mobile (`max-width: 767px`) uses full-width content, wrapped navigation labels, 16px body text, and 44px minimum controls.
- Body copy uses a readable 16px base with approximately 1.6-1.75 line-height and a 65-68 character measure for long-form text.
- Shared spacing follows an 8px base rhythm. Page sections are content-driven; fixed minimum heights are avoided unless a media aspect ratio requires reserved space.
- Header actions, sidebar rows, headings, grids, media, forms, and footer links use fluid widths and consistent 4-5px corner radii.
- Hover and focus states use restrained transitions. Reduced-motion users receive static states.
- No visible copy, images, routes, form fields, package IDs, embeds, or footer destinations may be added or rewritten during visual refinements.
- Validation must cover 1440px, 1200px, 1024px, 768px, and 375px, plus keyboard navigation, focus visibility, active navigation, contrast, and horizontal-overflow checks.

Nested pages one directory below the root, such as `vip-club/issue-1.html`, must set `data-root-prefix="../"` on `<body>`. `main.js` uses that value when generating sidebar destinations.

## 3. Page shell standard

The page has four shared regions in this order:

1. `header.site-header`
2. `div.page-shell` containing `aside.sidebar` and `main.main-content`
3. `footer.site-footer`
4. `script` for `assets/js/main.js`

Use this minimal skeleton:

```html
<body class="page-<type>" data-page="<nav-key>">
  <header class="site-header">
    <!-- linked natural-synergy-logo.png, testimonials, log in, log out -->
  </header>
  <div class="page-shell <type>-shell">
    <aside class="sidebar">
      <!-- sidebar cap, mobile toggle, canonical nav from an existing page -->
    </aside>
    <main class="main-content <type>-content">
      <!-- page-specific content -->
    </main>
  </div>
  <footer class="site-footer">
    <!-- canonical footer links and copyright -->
  </footer>
</body>
```

### Desktop proportions

- Header height: about 127px.
- Sidebar width: 470px; visible cap width: 456px.
- Main content: approximately 700px for the original screenshot layout.
- The desktop shell preserves the large whitespace between sidebar and content. Do not center everything into a modern full-bleed container.
- Sidebar rows are intentionally staggered. Keep the existing `.w-34`, `.w-67`, `.w-58`, `.w-100`, `.w-88`, `.w-79`, `.w-53`, `.w-40`, `.w-61`, `.w-55`, `.w-49`, `.w-50`, and `.w-39` classes.
- Footer is charcoal, full width, with centered underlined links and muted copyright.

### Header

- Use `images/natural-synergy-logo.png` through the existing `.brand` markup.
- Brand links to `index.html`.
- Testimonial action is orange and at least 44px tall.
- Log in and Log out remain simple underlined account links until real destinations are supplied.

### Sidebar

Use the canonical order and labels from `assets/js/main.js`. Each item is an anchor with:

```html
<i class="fa-solid fa-house nav-icon" aria-hidden="true"></i>
<span>Home</span>
```

The icon is decorative because the adjacent visible text is the accessible name. Never use Unicode symbols or emoji for sidebar icons.

| Item | Font Awesome class |
| --- | --- |
| Home | `fa-house` |
| Natural Synergy Program | `fa-book` |
| Natural Synergy App | `fa-mobile-screen-button` |
| Bonuses 1-3 | `fa-award` |
| Total Life Mastery, VIP Club | `fa-ribbon` |
| Inner Game of Wealth | `fa-magnifying-glass-dollar` |
| Account Settings | `fa-gears` |
| Video Tutorials | `fa-video` |
| Discovery Form | `fa-clipboard-list` |
| Support | `fa-envelope` |

`main.js` applies `.active` and `aria-current="page"` from `data-page`. Do not manually mark multiple active links. Keep the mobile toggle's `aria-expanded` state synchronized with its panel.

## 4. Design system

### Tokens

Use existing CSS variables instead of raw colors in new rules:

| Token | Value | Use |
| --- | --- | --- |
| `--olive` | `#89995b` | brand fills, cards, secondary headings |
| `--olive-heading` | `#788c4b` | headings and title accents |
| `--deep-olive` | `#566d3f` | sidebar, dark buttons, active controls |
| `--deep-olive-hover` | `#496033` | hover state |
| `--orange` | `#ff9208` | primary CTA, testimonial button, warning emphasis |
| `--charcoal` | `#414143` | footer and dark surfaces |
| `--text` | `#243127` | body text |
| `--muted-text` | `#505950` | supporting text |
| `--line` | `#a7b98b` | dividers and sidebar rules |
| `--panel` | `#e2e0d5` | soft section panels |
| `--warm-panel` | `#fff1df` | warm bonus/purchase sections |
| `--focus` | `#ffb13b` | keyboard focus ring |

Rules:

- One light theme across the page.
- One accent family: orange for action, olive for structure.
- Use the existing 4-5px corner radius language. Do not introduce pill-shaped controls or a second radius system.
- Avoid large gradients, glassmorphism, decorative blobs, heavy shadows, parallax, carousels, or animated backgrounds.
- Preserve generous white space and the screenshot hierarchy.

### Typography

- Font family: Montserrat everywhere, with Arial as a fallback.
- Base body: 16px, line-height 1.5.
- Body copy: usually 15-16px; never below 12px for essential content.
- Main page headings: 26-28px desktop, 21-23px on narrow screens, weight 400.
- Supporting headings: 17-21px, weight 400-600.
- Labels, nav, and CTA text: 14-16px, weight 500-700 as appropriate.
- Use italic only for quotes or short emphasis. Keep readable line-height and do not use all-caps for long paragraphs.
- Do not add another font. Do not use the default browser serif.

### Controls and links

- Primary action: orange background, white text, underlined text links only when they are links.
- Secondary action: deep olive background, white text.
- Minimum interactive target: 44px in either dimension, with at least 8px spacing between adjacent touch targets.
- Hover: a small brightness or background change, 150-300ms.
- Focus: retain the global visible `:focus-visible` ring. Never use `outline: none` without an equally visible replacement.
- Do not invent checkout, download, account, or support URLs. Use the supplied URL, an existing page, or a clearly documented placeholder anchor.

## 5. Reusable page archetypes

Choose the closest archetype instead of creating a new layout family.

| Archetype | Existing classes/patterns | Use for |
| --- | --- | --- |
| Welcome | `.welcome-title`, `.intro-copy`, `.video-section`, `.quick-links` | Home/member welcome pages |
| Program | `.program-heading`, `.web-row`, `.pdf-version` | Program and web/PDF book pages |
| App | `.app-heading`, `.app-copy`, `.open-app-button` | App instructions and launch CTA |
| Bonus download | `.bonus-heading`, `.bonus-row`, `.bonus-cover`, `.bonus-copy`, `.download-button` | Bonus 1, 2, and 3 |
| Editorial product | `.vip-*`, `.wealth-*`, `.mastery-*` | VIP, Inner Game, and Total Life Mastery content |
| Tutorials | `.tutorials-heading`, `.tutorials-panel`, `.top-tutorials`, `.pain-guide`, `.audio-links` | Vimeo tutorial collections and audio links |
| Support form | `.support-heading`, `.support-form`, `.support-field`, `.support-submit` | Contact/support request pages |
| Purchase | `.purchase-heading`, `.purchase-main`, `.purchase-intro`, `.purchase-visual`, `.purchase-copy`, `.purchase-cta`, `.purchase-button` | Product purchase pages |

### Title pattern

Use `images/ns-circle.png` beside the title. Keep the title in an existing `*-heading` flex row with a divider below it. Do not redraw the circle icon in CSS or SVG.

### Product/content pattern

- Use a two-column image-plus-copy grid on desktop.
- Put the supplied product image in the visual column with explicit dimensions where known.
- Keep paragraphs short and separated by generous vertical rhythm.
- Use an orange CTA after the explanation, not before the reader knows what is being offered.
- On mobile, stack image before copy and make the CTA full width.

### Media pattern

- Vimeo embeds use a responsive `aspect-ratio: 16 / 9` frame, `title`, `allow`, and `allowfullscreen`.
- Give every iframe a meaningful title.
- Lazy-load below-fold iframes and images. Reserve their aspect-ratio or dimensions to avoid layout shift.
- Audio links must use the supplied MP3 URL and visible link text. Do not autoplay audio.

### Support form pattern

- Keep the screenshot's centered form width and olive submit button.
- Every input and textarea needs a real `<label for="...">`; labels may be visually hidden only when the screenshot requires placeholder-style visuals.
- Use `autocomplete` where appropriate and `type="email"` for email.
- Show a success or error state after submit when a real handler is later connected.
- Do not include CAPTCHA unless the user explicitly requests it. The current support page must not include one.

## 6. Responsive behavior

Test at 1440px, 1024px, 768px, and 375px.

- Desktop: preserve the 470px sidebar and screenshot spacing.
- At or below 1050px: sidebar becomes a full-width navigation region with an accessible toggle; content no longer depends on a fixed desktop offset.
- At or below 700px: stack two-column content, media, cards, and product sections.
- At or below 640px: reduce heading sizes and horizontal padding; keep controls at least 44px tall.
- Use `minmax(0, 1fr)`, `max-width: 100%`, and `overflow-wrap` where needed. There must be no horizontal scrolling.
- Never disable user zoom. Preserve a viewport meta tag.
- Respect `prefers-reduced-motion: reduce`; remove non-essential transitions and reveals.

## 7. Accessibility and performance contract

Before considering a page complete:

- Exactly one navigation item has `.active` and `aria-current="page"`.
- Keyboard tab order follows the visual order. Escape closes the mobile sidebar.
- Every interactive control has a visible focus state and a meaningful accessible name.
- Decorative Font Awesome icons have `aria-hidden="true"`.
- Every informative image has concise, accurate `alt`; decorative images use empty alt.
- Images have width/height or a reserved aspect ratio; below-fold media uses lazy loading.
- Text and controls meet at least WCAG AA contrast where possible, especially orange and olive buttons.
- No hover-only interaction, no icon-only unlabeled action, and no placeholder-only form field.
- Keep layout stable: no late-loading media that changes the page geometry.
- Keep JavaScript limited to shared navigation behavior. Do not add inline scripts or page-specific copies of the menu logic.

## 8. New-page workflow

1. Read this guide and identify the closest archetype.
2. Inspect only the new screenshot and the specifically supplied assets/URLs.
3. Copy the header, sidebar, footer, external head links, and page shell from the closest existing page.
4. Set `body[data-page]` to the correct `main.js` key.
5. Add page content using existing classes. Add a new scoped class only when the screenshot has a genuinely new block.
6. Add supplied images with explicit dimensions, alt text, and lazy loading when below the fold.
7. Add only supplied or already-existing destinations. Leave unknown destinations as documented placeholders.
8. Run the checks below before handing off.

Do not repeat the full navigation markup, color decisions, breakpoint decisions, or Font Awesome setup in a new page description. Refer to this guide and the shared files instead.

## 9. Verification checklist

Run these checks for every new page:

- [ ] File name follows the approved slug convention.
- [ ] Only `assets/css/main.css` and `assets/js/main.js` are local style/script resources.
- [ ] Montserrat and Font Awesome links match the shared pages.
- [ ] Header, canonical sidebar order, active state, and footer are present.
- [ ] All local `href` and `src` targets resolve.
- [ ] Supplied external URLs are unchanged and open in the intended context.
- [ ] No obsolete CSS, `script.js`, old filename, Unicode sidebar glyph, or invented URL remains.
- [ ] No CAPTCHA appears unless explicitly requested.
- [ ] `node --check assets/js/main.js` passes.
- [ ] Desktop screenshot proportions are close at 1440px and 1024px.
- [ ] Stacked layout works at 768px and 375px with no horizontal scroll.
- [ ] Keyboard navigation, focus ring, Escape menu close, `aria-current`, and `aria-expanded` work.
- [ ] Reduced-motion behavior is respected.

When reporting completion, list only the changed files, the verified URLs/assets, and any intentionally unresolved placeholder links.
