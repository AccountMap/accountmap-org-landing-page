# Screenshot slideshow images

Drop your app screenshots here. The landing page uses them in the Steam-style slideshow.

**Naming:** Use the filenames listed in `src/routes/+page.svelte` in the `screenshotSlides` array (e.g. `1.jpg`, `2.jpg`, `3.jpg`, …). Add or rename files and update that array to match.

**Formats:** `.jpg`, `.png`, or `.webp` all work.

**Aspect:** The slideshow is `aspect-video` (16:9). Images are cropped with `object-cover` to fill the frame, so 16:9 or similar works best.
