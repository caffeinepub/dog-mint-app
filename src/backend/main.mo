import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {

  // ── Phase 1 legacy type (kept so dogStore stable var stays compatible) ──
  type LegacyDog = {
    id : Text;
    name : Text;
    breed : Text;
    coatColor : Text;
    eyeColor : Text;
    accessory : Text;
    mintedAt : Int;
  };

  // ── Phase 2 types ────────────────────────────────────────────────────────
  type Dog = {
    id : Text;
    name : Text;
    breed : Text;
    color : Text;
    eyes : Text;
    markings : Text;
    mintedAt : Int;
  };

  type MintDogInput = {
    name : Text;
    breed : Text;
    color : Text;
    eyes : Text;
    markings : Text;
  };

  // ── Deprecated stable vars kept to prevent M0169 upgrade errors ──────────
  let allowedCoatColors : [Text] = ["golden", "brown", "black", "white", "gray", "cream", "spotted"];
  let allowedEyeColors  : [Text] = ["brown", "blue", "green", "amber", "heterochromia"];
  let allowedAccessories : [Text] = ["none", "collar", "hat", "bandana", "bowtie", "glasses"];

  // ── Legacy store (same name + LegacyDog type prevents M0170) ─────────────
  // Existing Phase 1 dogs live here; they are migrated to dogStoreV2 on upgrade.
  let dogStore = Map.empty<Principal, [LegacyDog]>();

  // ── Phase 2 store ─────────────────────────────────────────────────────────
  let dogStoreV2 = Map.empty<Principal, [Dog]>();

  // ── Allowed values ────────────────────────────────────────────────────────
  let allowedBreeds   = ["labrador", "poodle", "bulldog", "beagle", "husky", "corgi", "dalmatian", "shiba"];
  let allowedColors   = ["black", "brown", "golden", "white", "gray"];
  let allowedEyes     = ["round", "sleepy", "wide"];
  let allowedMarkings = ["none", "spots", "patches"];

  func isAllowed(value : Text, allowedArray : [Text]) : Bool {
    allowedArray.find(func(x) { x == value }) != null;
  };

  func validateDogInput(input : MintDogInput) {
    if (input.name.trim(#char ' ') == "") {
      Runtime.trap("Name must be non-empty");
    };
    if (input.name.chars().toArray().size() > 30) {
      Runtime.trap("Name must be at most 30 characters");
    };
    if (not isAllowed(input.breed, allowedBreeds)) {
      Runtime.trap("Invalid breed");
    };
    if (not isAllowed(input.color, allowedColors)) {
      Runtime.trap("Invalid color");
    };
    if (not isAllowed(input.eyes, allowedEyes)) {
      Runtime.trap("Invalid eye style");
    };
    if (not isAllowed(input.markings, allowedMarkings)) {
      Runtime.trap("Invalid markings");
    };
  };

  public shared ({ caller }) func mintDog(input : MintDogInput) : async Dog {
    validateDogInput(input);

    let newDog : Dog = {
      id       = caller.toText() # Time.now().toText();
      name     = input.name;
      breed    = input.breed;
      color    = input.color;
      eyes     = input.eyes;
      markings = input.markings;
      mintedAt = Time.now();
    };

    switch (dogStoreV2.get(caller)) {
      case (null)   { dogStoreV2.add(caller, [newDog]); };
      case (?dogs)  {
        let newDogs = dogs.concat([newDog]);
        dogStoreV2.add(caller, newDogs);
      };
    };

    newDog;
  };

  public query ({ caller }) func getMyDogs() : async [Dog] {
    switch (dogStoreV2.get(caller)) {
      case (null)  { [] };
      case (?dogs) { dogs };
    };
  };

  public query func getDogById(id : Text) : async ?Dog {
    dogStoreV2.values().toArray().flatten().find(func(dog) { dog.id == id });
  };

  // ── Upgrade migration: copy Phase 1 dogs into dogStoreV2 ─────────────────
  system func postupgrade() {
    for ((principal, dogs) in dogStore.entries()) {
      switch (dogStoreV2.get(principal)) {
        case (null) {
          let migrated = dogs.map(func(d : LegacyDog) : Dog {
            {
              id       = d.id;
              name     = d.name;
              breed    = d.breed;
              color    = d.coatColor; // best-effort map
              eyes     = "round";     // default
              markings = "none";      // default
              mintedAt = d.mintedAt;
            }
          });
          if (migrated.size() > 0) {
            dogStoreV2.add(principal, migrated);
          };
        };
        case (_) {}; // already migrated
      };
    };
  };
};
