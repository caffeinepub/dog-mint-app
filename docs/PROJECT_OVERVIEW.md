# Project Overview: Dog Mint App

## Purpose
Dog Mint App is a standalone ICP-native application that lets users design, customize, and permanently mint unique dog characters on the Internet Computer blockchain. Each dog is owned by a user's Internet Identity principal and stored persistently in a Motoko canister.

## Phase 1 Goals
- Allow users to select from 8 real dog breeds, each with distinct visual traits
- Allow users to name their dog (validated, non-empty)
- Allow users to customize coat color, eye color, and a wearable accessory
- Mint the dog permanently to the backend, keyed by user principal
- Display all owned dogs in a gallery view
- Work with anonymous principals (no forced login required in Phase 1)

## Tech Stack
- **Backend**: Motoko canister on Internet Computer
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Identity**: Internet Identity (anonymous principal fallback supported)
- **Storage**: In-canister HashMap (no external DB)
- **Visuals**: SVG/CSS dog illustrations — no external image APIs

## Non-Goals (Phase 1)
- No token economy or $WOOF tokens
- No rarity tiers or breeding mechanics
- No marketplace or transfer logic
- No email or push notifications
- No external APIs

## Success Criteria
- User can complete full creation wizard and mint a dog in under 2 minutes
- Minted dogs persist across page reloads
- Gallery correctly shows only the calling user's dogs
- All backend inputs are validated server-side
