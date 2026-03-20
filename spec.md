# Dog Mint App — Product Polish + Mint UX Upgrade

## Current State
- App shell (Header + Footer) is inlined inside App.tsx
- Header: logo, Create nav link, My Dogs nav link, + New Dog button. Active state styling present.
- Footer: minimal — brand logo + caffeine.ai credit only. No legal links, no social links.
- No constants/config file for footer links.
- HomePage: hero section with primary/secondary CTA, 6 breed cards, How It Works (3 steps), all functional. Visual polish is prototype-level.
- WizardPage: 4-step wizard (Breed → Traits → Name → Mint) + success screen. All mint logic working. StepIndicator exists.
- GalleryPage: header with dog count, loading/error/empty states, DogCard grid. Functional but visually basic.
- No /privacy or /terms routes exist.
- All routes working: /, /create, /gallery

## Requested Changes (Diff)

### Add
- `src/frontend/src/components/Header.tsx` — extracted, upgraded Header component
- `src/frontend/src/components/Footer.tsx` — new full product footer with brand, social placeholders, legal links
- `src/frontend/src/config/links.ts` — constants file for all nav/social/legal links
- `src/frontend/src/pages/PrivacyPage.tsx` — /privacy routed page, professionally structured placeholder
- `src/frontend/src/pages/TermsPage.tsx` — /terms routed page, professionally structured placeholder
- /privacy and /terms routes in App.tsx

### Modify
- `App.tsx` — import Header/Footer from components, add /privacy and /terms routes, remove inlined Header/Footer
- `HomePage.tsx` — elevated launch-page feel: stronger hero hierarchy, premium breed card section, 4-step How It Works (Choose breed / Customize traits / Name your dog / Mint and collect), stronger bottom CTA section
- `WizardPage.tsx` — stronger section headers, better progress cues, improved spacing; all mint logic untouched
- `GalleryPage.tsx` — premium collection page feel, improved empty state, better card grid
- `DogCard.tsx` — more polished card styling for collectible showcase feel
- `StepIndicator.tsx` — clearer active/completed step styling

### Remove
- Inlined Header and Footer functions from App.tsx

## Implementation Plan
1. Create `src/frontend/src/config/links.ts` with all social/legal/nav link constants
2. Create `src/frontend/src/components/Header.tsx` with premium styling, active nav, mobile responsiveness
3. Create `src/frontend/src/components/Footer.tsx` with brand area, social placeholders, Privacy + Terms links, subtle caffeine.ai credit
4. Create `src/frontend/src/pages/PrivacyPage.tsx` — clean, professional placeholder
5. Create `src/frontend/src/pages/TermsPage.tsx` — clean, professional placeholder
6. Update `App.tsx` — use extracted Header/Footer, add /privacy and /terms routes
7. Update `HomePage.tsx` — premium launch page: hero, breed cards, 4-step How It Works, bottom CTA
8. Update `WizardPage.tsx` — clearer step headers, better spacing, same mint logic
9. Update `GalleryPage.tsx` — collectible showcase feel, better empty state
10. Update `DogCard.tsx` — premium card styling
11. Update `StepIndicator.tsx` — cleaner step progression
12. Validate: lint + typecheck + build
