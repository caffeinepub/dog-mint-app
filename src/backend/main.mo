import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Char "mo:core/Char";

actor {
  type Dog = {
    id : Text;
    name : Text;
    breed : Text;
    coatColor : Text;
    eyeColor : Text;
    accessory : Text;
    mintedAt : Int;
  };

  type MintDogInput = {
    name : Text;
    breed : Text;
    coatColor : Text;
    eyeColor : Text;
    accessory : Text;
  };

  let allowedBreeds = [
    "labrador",
    "poodle",
    "bulldog",
    "beagle",
    "husky",
    "corgi",
    "dalmatian",
    "shiba",
  ];
  let allowedCoatColors = ["golden", "brown", "black", "white", "gray", "cream", "spotted"];
  let allowedEyeColors = ["brown", "blue", "green", "amber", "heterochromia"];
  let allowedAccessories = ["none", "collar", "hat", "bandana", "bowtie", "glasses"];

  let dogStore = Map.empty<Principal, [Dog]>();

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
    if (not isAllowed(input.coatColor, allowedCoatColors)) {
      Runtime.trap("Invalid coat color");
    };
    if (not isAllowed(input.eyeColor, allowedEyeColors)) {
      Runtime.trap("Invalid eye color");
    };
    if (not isAllowed(input.accessory, allowedAccessories)) {
      Runtime.trap("Invalid accessory");
    };
  };

  public shared ({ caller }) func mintDog(input : MintDogInput) : async Dog {
    validateDogInput(input);

    let newDog : Dog = {
      id = caller.toText() # Time.now().toText();
      name = input.name;
      breed = input.breed;
      coatColor = input.coatColor;
      eyeColor = input.eyeColor;
      accessory = input.accessory;
      mintedAt = Time.now();
    };

    switch (dogStore.get(caller)) {
      case (null) {
        dogStore.add(caller, [newDog]);
      };
      case (?dogs) {
        let newDogs = dogs.concat([newDog]);
        dogStore.add(caller, newDogs);
      };
    };

    newDog;
  };

  public query ({ caller }) func getMyDogs() : async [Dog] {
    switch (dogStore.get(caller)) {
      case (null) { [] };
      case (?dogs) { dogs };
    };
  };

  public query func getDogById(id : Text) : async ?Dog {
    dogStore.values().toArray().flatten().find(func(dog) { dog.id == id });
  };
};
