# Rishikesh — GradientWaves integration

This package contains the complete updated page files for the current Rishikesh fitness page.

## Changes included

- Added the React Bits `GradientWaves` component.
- Added the `ogl` dependency requirement.
- Mounted exactly one GradientWaves instance as the fixed background for the whole webpage.
- Removed the old competing hero/program/footer background fills.
- Removed the footer landscape image as a second webpage background.
- Kept the existing Hero → Programs → Join structure.
- Kept the mobile order: `rushikesh.png` first, then all hero text/content.
- Kept the horizontal mobile Programs carousel.
- Kept the IntersectionObserver scroll reveal animation.
- Moved the page CSS out of the inline `<style>` block into `app/globals.css`.
- Kept the background canvas non-interactive so page links/buttons continue to work.
- Added visibility pausing and resize handling to the WebGL background.
- Added reduced-motion handling from the existing page CSS.

## Install

From the project root:

```bash
npm install ogl
```

If your project uses a package manager other than npm, install the equivalent `ogl` dependency.

## Copy files

Replace/add these files:

```text
app/page.tsx
app/globals.css
components/GradientWaves.tsx
components/GradientWaves.css
```

The page imports the component using:

```tsx
import GradientWaves from "@/components/GradientWaves";
```

If your project does not use the `@/*` path alias, change that import to the relative path for your project.

## Required public asset

The page expects:

```text
public/rushikesh.png
```

Keep your existing image there.

## Clear Next.js build cache after replacing files

macOS/Linux:

```bash
rm -rf .next
npm run dev
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```
