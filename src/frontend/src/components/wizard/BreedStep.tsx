import { BREEDS } from "../../data/dogData";
import { DogSVG } from "../DogSVG";

interface BreedStepProps {
  selected: string;
  onSelect: (breed: string) => void;
  onNext: () => void;
}

export function BreedStep({ selected, onSelect, onNext }: BreedStepProps) {
  return (
    <div className="animate-slide-in flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">Choose Your Breed</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Pick the breed that speaks to your soul 🐾
        </p>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        data-ocid="breed.list"
      >
        {BREEDS.map((breed, idx) => (
          <button
            key={breed.key}
            type="button"
            onClick={() => onSelect(breed.key)}
            data-ocid={`breed.item.${idx + 1}`}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              selected === breed.key
                ? "border-primary bg-primary/8 shadow-card"
                : "border-border bg-card hover:border-primary/40 hover:bg-muted"
            }`}
          >
            <DogSVG
              breed={breed.key}
              color={breed.defaultColor}
              eyes="round"
              markings="none"
              size={70}
            />
            <span
              className={`text-xs font-bold text-center ${selected === breed.key ? "text-primary" : "text-foreground"}`}
            >
              {breed.name}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!selected}
        data-ocid="breed.primary_button"
        className="w-full py-3 rounded-full font-bold text-primary-foreground bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-card"
      >
        Continue →
      </button>
    </div>
  );
}
