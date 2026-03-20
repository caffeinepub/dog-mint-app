# Test Checklist

## Backend Validation Tests
- [ ] `mintDog` with empty name returns Err("Name is required")
- [ ] `mintDog` with name > 30 chars returns Err("Name must be 30 characters or fewer")
- [ ] `mintDog` with invalid breed key returns Err("Invalid breed")
- [ ] `mintDog` with invalid coatColor key returns Err("Invalid coat color")
- [ ] `mintDog` with invalid eyeColor key returns Err("Invalid eye color")
- [ ] `mintDog` with invalid accessory key returns Err("Invalid accessory")
- [ ] `mintDog` with valid input returns Ok(Dog) with all fields set
- [ ] `getMyDogs` returns [] for a new principal
- [ ] `getMyDogs` returns minted dogs for a principal that has minted
- [ ] `getDogById` returns the correct dog for a valid id
- [ ] `getDogById` returns null for a non-existent id
- [ ] Multiple principals each see only their own dogs via `getMyDogs`

## Frontend Wizard Tests
- [ ] Step 1: All 8 breed cards render and are clickable
- [ ] Step 1: Selecting a breed highlights it visually and enables Next
- [ ] Step 2: Empty name field shows validation error and disables Next
- [ ] Step 2: Name > 30 chars shows character limit error
- [ ] Step 3: Selecting coat color updates dog SVG preview in real time
- [ ] Step 3: Selecting eye color updates dog SVG preview in real time
- [ ] Step 3: Selecting accessory updates dog SVG preview in real time
- [ ] Step 4: Preview shows correct breed, name, and all selected traits
- [ ] Step 4: Clicking "Mint" triggers canister call (not a mock)
- [ ] Success screen appears after successful mint
- [ ] Error state shown if canister returns Err

## Gallery Tests
- [ ] Gallery shows loading spinner while fetching
- [ ] Gallery correctly renders all minted dogs for current user
- [ ] Gallery shows empty state when user has no dogs
- [ ] Each dog card shows: name, breed, minted date, mini SVG preview
- [ ] Mini SVG on card matches the traits stored for that dog

## Navigation Tests
- [ ] Header "Create" link opens wizard
- [ ] Header "My Dogs" link opens gallery
- [ ] Wizard back button returns to previous step without losing state
- [ ] Success screen "View My Dogs" link navigates to gallery
