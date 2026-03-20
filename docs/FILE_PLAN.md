# File Plan

## Backend (Motoko)
```
src/backend/main.mo          # Main canister: types, state, all public functions
```

## Frontend (React + TypeScript)
```
src/frontend/
  src/
    main.tsx                  # App entry point
    App.tsx                   # Router, layout wrapper
    index.css                 # Tailwind base + custom tokens

    pages/
      HomePage.tsx            # Landing page with hero + CTA
      WizardPage.tsx          # Dog creation wizard (all steps)
      GalleryPage.tsx         # Owned dogs gallery

    components/
      wizard/
        BreedStep.tsx         # Step 1: Breed selection grid
        NameStep.tsx          # Step 2: Name input with validation
        TraitsStep.tsx        # Step 3: Color and accessory pickers
        PreviewStep.tsx       # Step 4: Final preview + mint button
      dog/
        DogSVG.tsx            # Main SVG dog illustration component
        DogCard.tsx           # Gallery card with mini SVG preview
      ui/
        StepIndicator.tsx     # Wizard progress bar
        ColorSwatch.tsx       # Reusable color picker swatch
        AccessoryPicker.tsx   # Accessory icon selector

    hooks/
      useDogWizard.ts         # Wizard state management hook
      useMyDogs.ts            # Gallery data fetching hook

    lib/
      canister.ts             # Backend canister actor setup
      dogData.ts              # Breed/trait constants + display metadata
      types.ts                # Shared TypeScript types
      utils.ts                # Date formatting, text helpers
```

## Docs
```
docs/
  PROJECT_OVERVIEW.md
  LOGIC_BLUEPRINT.md
  USER_FLOWS.md
  ENTITY_DEFINITIONS.md
  EXCLUSION_RULES.md
  FILE_PLAN.md
  TEST_CHECKLIST.md
  SESSION_LOG.md
  IMPLEMENTATION_LOG.md
  NEXT_STEPS.md
```

## Config
```
package.json                  # Frontend dependencies
tailwind.config.js            # Dog-themed color palette
tsconfig.json                 # TypeScript config
```
