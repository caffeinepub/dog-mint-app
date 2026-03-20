import type { Dog } from "../backend.d";
import { BREEDS, COLORS, EYE_STYLES, MARKINGS } from "../data/dogData";
import { DogSVG } from "./DogSVG";

interface DogCardProps {
  dog: Dog;
  index: number;
}

function shortId(id: string) {
  if (id.length <= 14) return id;
  return `${id.slice(0, 6)}…${id.slice(-5)}`;
}

export function DogCard({ dog, index }: DogCardProps) {
  const breedLabel = BREEDS.find((b) => b.key === dog.breed)?.name ?? dog.breed;
  const colorLabel = COLORS.find((c) => c.key === dog.color)?.name ?? dog.color;
  const eyeLabel = EYE_STYLES.find((e) => e.key === dog.eyes)?.name ?? dog.eyes;
  const markingsLabel =
    MARKINGS.find((m) => m.key === dog.markings)?.name ?? dog.markings;

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
      {/* Dog illustration */}
      <div className="bg-muted flex items-center justify-center py-6 px-4">
        <DogSVG
          breed={dog.breed}
          color={dog.color}
          eyes={dog.eyes}
          markings={dog.markings}
          size={110}
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg text-foreground leading-tight truncate">
              {dog.name}
            </h3>
            <span className="text-sm font-semibold text-primary">
              {breedLabel}
            </span>
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">
            {dateStr}
          </span>
        </div>

        {/* Trait badges */}
        <div className="flex flex-wrap gap-1 mt-1">
          <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium capitalize">
            {colorLabel}
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium capitalize">
            {eyeLabel} eyes
          </span>
          {dog.markings && dog.markings !== "none" && (
            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium capitalize">
              {markingsLabel}
            </span>
          )}
        </div>

        {/* Token ID */}
        <div className="mt-1 pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
            Token ID
          </p>
          <p className="text-xs font-mono text-foreground/60 mt-0.5 truncate">
            {shortId(dog.id)}
          </p>
        </div>
      </div>
    </div>
  );
}
