# Logic Blueprint

## Backend Logic (Motoko)

### Data Model
```
type Dog = {
  id: Text;           // UUID v4 generated at mint time
  name: Text;         // User-provided, 1–30 chars
  breed: Text;        // One of 8 valid breed keys
  coatColor: Text;    // One of defined coat color keys
  eyeColor: Text;     // One of defined eye color keys
  accessory: Text;    // One of defined accessory keys (incl. "none")
  mintedAt: Int;      // Timestamp in nanoseconds (Time.now())
};
```

### Storage
- `dogs: HashMap<Principal, [Dog]>` — one array of dogs per principal
- Initialized stable via `preupgrade`/`postupgrade` hooks using `[(Principal, [Dog])]` stable var

### Canister Functions

#### `mintDog(input: MintDogInput) : async Result<Dog, Text>`
- Validate: name not empty, name length ≤ 30
- Validate: breed in allowedBreeds
- Validate: coatColor in allowedCoatColors
- Validate: eyeColor in allowedEyeColors
- Validate: accessory in allowedAccessories
- Generate UUID-style id from principal + timestamp hash
- Push new Dog into caller's array
- Return Ok(newDog) or Err(validationMessage)

#### `getMyDogs() : async [Dog]`
- Return all dogs for caller principal
- Return [] if no dogs yet

#### `getDogById(id: Text) : async ?Dog`
- Iterate all dogs across all principals to find matching id
- Return ?Dog (null if not found)

### Validation Constants
```
allowedBreeds = ["labrador", "poodle", "bulldog", "beagle", "husky", "corgi", "dalmatian", "shiba"]
allowedCoatColors = ["golden", "brown", "black", "white", "gray", "cream", "spotted"]
allowedEyeColors = ["brown", "blue", "green", "amber", "heterochromia"]
allowedAccessories = ["none", "collar", "hat", "bandana", "bowtie", "glasses"]
```

## Frontend Logic (React + TypeScript)

### Wizard State Machine
Steps: BREED → NAME → TRAITS → PREVIEW → MINTING → SUCCESS

State shape:
```typescript
interface WizardState {
  step: WizardStep;
  breed: string;
  name: string;
  coatColor: string;
  eyeColor: string;
  accessory: string;
}
```

### Live Preview
- SVG dog illustration built from layered SVG components
- Each trait (breed, coat, eye, accessory) maps to a distinct visual change in the SVG
- Preview re-renders on every state change

### Gallery
- Calls `getMyDogs()` on mount
- Renders dog cards with all stored traits
- Each card shows a mini-preview SVG matching the dog's traits
