# Exclusion Rules

The following features and patterns are explicitly forbidden in Phase 1. Any developer working on this codebase must not implement, stub, or suggest these features.

## Forbidden Features

### Token Economy
- No $WOOF tokens, fungible tokens, or any in-app currency
- No minting fees, gas charges, or simulated transaction costs
- No wallet balances, spending, or earning mechanics

### Rarity / Gamification
- No rarity tiers (Common, Rare, Legendary, etc.)
- No random trait generation
- No "luck" mechanics
- No achievement badges or XP systems

### Social / Marketplace
- No dog trading or transfer between principals
- No marketplace, listings, or offers
- No likes, comments, or social feeds
- No sharing links to individual dogs (Phase 1)

### Evolution / Breeding
- No breeding two dogs to produce offspring
- No leveling up, evolution stages, or time-based progression
- No stat systems (strength, speed, etc.)

### External Integrations
- No external APIs (image generation, AI art, metadata APIs)
- No WebSockets or real-time subscriptions
- No LLM integrations of any kind
- No email notifications
- No Stripe or payments

### UI Anti-Patterns
- No placeholder buttons that do nothing ("Coming Soon", "Stay Tuned")
- No skeleton screens that never resolve
- No generic Bootstrap/Material-UI templates
- No lorem ipsum placeholder text in final UI

### Mock Data
- No mock minting — mint must call the real Motoko canister
- No hardcoded dummy dog lists in the gallery
- The gallery must reflect what is actually stored on-chain
