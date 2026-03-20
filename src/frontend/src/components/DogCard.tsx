import type { Dog } from "../backend.d";
import { BREEDS, COLORS, EYE_STYLES, MARKINGS } from "../data/dogData";
import { DogSVG } from "./DogSVG";

interface DogCardProps {
  dog: Dog;
  index: number;
}

function shortId(id: string) {
  if (id.length <= 14) return id;
  return `${id.slice(0, 6)}\u2026${id.slice(-5)}`;
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
      className="bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
      data-ocid={`gallery.item.${index}`}
    >
      {/* Dog illustration area */}
      <div className="bg-gradient-to-b from-primary/8 to-muted flex items-center justify-center py-8 px-4 relative">
        {/* Breed badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-card/90 border border-border rounded-full text-[10px] font-bold text-foreground uppercase tracking-wider backdrop-blur-sm">
          {breedLabel}
        </span>
        {/* Date */}
        <span className="absolute top-3 right-3 text-[10px] text-muted-foreground font-medium">
          {dateStr}
        </span>
        <DogSVG
          breed={dog.breed}
          color={dog.color}
          eyes={dog.eyes}
          markings={dog.markings}
          size={120}
        />
      </div>

      {/* Info section */}
      <div className="p-5 flex flex-col gap-3">
        {/* Name */}
        <h3 className="font-display font-extrabold text-xl text-foreground leading-tight tracking-tight">
          {dog.name}
        </h3>

        {/* Trait badges */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-full font-semibold capitalize">
            {colorLabel}
          </span>
          <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold capitalize">
            {eyeLabel} eyes
          </span>
          {dog.markings && dog.markings !== "none" && (
            <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full font-semibold capitalize">
              {markingsLabel}
            </span>
          )}
        </div>

        {/* Token ID */}
        <div className="pt-2 border-t border-border">
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
            Token ID
          </p>
          <p className="text-xs font-mono text-foreground/50 mt-0.5 truncate">
            {shortId(dog.id)}
          </p>
        </div>
      </div>
    </div>
  );
}
