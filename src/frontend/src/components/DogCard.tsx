import type { Dog } from "../backend.d";
import { BREEDS } from "../data/dogData";
import { DogSVG } from "./DogSVG";

interface DogCardProps {
  dog: Dog;
  index: number;
}

export function DogCard({ dog, index }: DogCardProps) {
  const breedLabel = BREEDS.find((b) => b.key === dog.breed)?.name ?? dog.breed;
  const mintDate = new Date(Number(dog.mintedAt) / 1_000_000);
  const dateStr = mintDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 flex flex-col"
      data-ocid={`gallery.item.${index}`}
    >
      <div className="bg-muted flex items-center justify-center py-6 px-4">
        <DogSVG
          breed={dog.breed}
          coatColor={dog.coatColor}
          eyeColor={dog.eyeColor}
          accessory={dog.accessory}
          size={110}
        />
      </div>

      <div className="p-4 flex flex-col gap-1.5">
        <h3 className="font-bold text-lg text-foreground leading-tight truncate">
          {dog.name}
        </h3>
        <span className="text-sm font-semibold text-primary">{breedLabel}</span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              role="img"
              aria-label="calendar"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {dateStr}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {dog.accessory !== "none" && (
            <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium capitalize">
              {dog.accessory}
            </span>
          )}
          <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium capitalize">
            {dog.coatColor}
          </span>
        </div>
      </div>
    </div>
  );
}
