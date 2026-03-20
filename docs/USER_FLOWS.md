# User Flows

## Flow 1: First-Time Dog Creation
1. User lands on homepage — sees hero section with "Create Your Dog" CTA
2. User clicks CTA → wizard opens at Step 1: Breed Selection
3. User sees 8 breed cards with names and breed-specific illustrations
4. User selects a breed → Step 2 activates: Name Your Dog
5. User types a name (1–30 characters) → validates on change
6. User clicks Next → Step 3 activates: Customize Traits
7. User selects coat color from color swatches (7 options)
8. User selects eye color from color swatches (5 options)
9. User selects an accessory from icon grid (6 options including "None")
10. Live dog preview updates after each selection
11. User clicks Next → Step 4: Preview & Confirm
12. User sees full-size dog preview with all traits listed
13. User clicks "Mint My Dog" → loading state shown
14. Frontend calls `mintDog()` canister function with wizard state
15. On success → Step 5: Success screen with dog name + confetti
16. User clicks "View My Dogs" → navigates to gallery

## Flow 2: Returning User — View Gallery
1. User navigates to /gallery
2. Frontend calls `getMyDogs()` on mount
3. Loading spinner shown during fetch
4. Dogs displayed as cards: mini-SVG preview, name, breed, minted date
5. If no dogs: empty state with "Create Your First Dog" link

## Flow 3: Minting Validation Error
1. User submits empty name → "Name is required" error shown inline
2. User submits name > 30 chars → "Name must be 30 characters or fewer" shown
3. Backend returns Err → error toast shown, wizard stays on current step

## Flow 4: Navigation
- Header: Logo + "My Dogs" link (gallery) + "Create" link (wizard)
- Wizard has back/forward navigation between steps
- Back navigation preserves all previously entered state
