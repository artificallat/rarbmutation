## Plan

### 1. Add LinkedIn post images to News & Home

Copy the user's uploaded images into `src/assets/` and use them in the matching news posts (LinkedIn feed):

- `user-uploads://image-21.png` → `src/assets/news-run-for-rare-couple.jpg` (parents in "Run for Rare" shirts)
- `user-uploads://image-22.png` → `src/assets/news-run-for-rare-family.jpg` (family on swing)
- `user-uploads://image-23.png` → `src/assets/news-happy-new-year.jpg` (Happy New Year wheelchair)
- `user-uploads://image-24.png` → `src/assets/news-chiesi-group.jpg` (group photo, conference)
- `user-uploads://image-25.png` → `src/assets/news-simon-smile.jpg` (Simon smiling, eyes closed)
- `user-uploads://image-26.png` → `src/assets/news-n1-collaborative-group.jpg` (N=1 Collaborative big group)
- `user-uploads://image-27.png` → `src/assets/news-n1-collaborative-hall.jpg` (N=1 conference hall)

Update both `src/pages/Home.tsx` (`homeNews`) and `src/pages/News.tsx` (`posts`):

- Replace **"Run for Rare – Run for Simon"** thumbnail with `news-run-for-rare-couple.jpg` (the selfie of both parents in the shirts is the LinkedIn cover image).
- Replace **"Happy New Year from Cure MCOPS12"** thumbnail with `news-happy-new-year.jpg`.
- Add a new news entry **"N=1 Collaborative 2025 Annual Meeting"** using `news-n1-collaborative-group.jpg` (the LinkedIn post about the meeting).
- Add a new news entry **"Simon — moments of joy"** (or similar short post matching the LinkedIn "Behind every BIG..." post) using `news-simon-smile.jpg`.

`News.tsx` will show all 5 posts in a grid; `Home.tsx` will keep showing the 3 most recent.

### 2. Mobile-only hero crop fix

User screenshot shows that on mobile (~390px wide) the **family hero image** crops off faces — the "as far as possible…" slide cuts the heads.

In `src/pages/Home.tsx` lines 101–107, adjust per-slide `object-position` so faces stay in view on mobile, while keeping current desktop framing:

- Slide 0 (`heroHorse`): mobile `object-[60%_20%]`, desktop unchanged `sm:object-[70%_25%]`
- Slide 1 (`heroFamily` — the cropped one): mobile `object-[60%_30%]` to keep mom + Simon faces visible, desktop unchanged `sm:object-center`
- Slide 2 (`heroBeyond`): mobile `object-[50%_25%]`, desktop unchanged `sm:object-center`
- Slide 3 (`heroPlayground`): mobile `object-[50%_20%]`, desktop unchanged

These are face-tested anchor points based on each photo's composition. Only the mobile (default, no-prefix) `object-position` changes; `sm:` overrides preserve current desktop look.

### Files

- `src/pages/Home.tsx` — update `homeNews` images + per-slide `object-position`
- `src/pages/News.tsx` — update `posts` images, add 2 new entries
- `src/assets/news-*.jpg` — new image assets copied from uploads
