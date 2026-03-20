import { useState } from "react";
import type { Dog } from "../../backend.d";
import {
  ACCESSORIES,
  BREEDS,
  COAT_COLORS,
  EYE_COLORS,
} from "../../data/dogData";
import { useActor } from "../../hooks/useActor";
import { DogSVG } from "../DogSVG";

interface PreviewStepProps {
  breed: string;
  name: string;
  coatColor: string;
  eyeColor: string;
  accessory: string;
  onMintSuccess: (dog: Dog) => void;
  onBack: () => void;
}

export function PreviewStep({
  breed,
  name,
  coatColor,
  eyeColor,
  accessory,
  onMintSuccess,
  onBack,
}: PreviewStepProps) {
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { actor } = useActor();

  const breedLabel = BREEDS.find((b) => b.key === breed)?.name ?? breed;
  const coatLabel =
    COAT_COLORS.find((c) => c.key === coatColor)?.name ?? coatColor;
  const eyeLabel = EYE_COLORS.find((c) => c.key === eyeColor)?.name ?? eyeColor;
  const accLabel =
    ACCESSORIES.find((a) => a.key === accessory)?.name ?? accessory;

  async function handleMint() {
    if (!actor) {
      setError("Not connected. Please wait and try again.");
      return;
    }
    setMinting(true);
    setError(null);
    try {
      const dog = await actor.mintDog({
        breed,
        name,
        coatColor,
        eyeColor,
        accessory,
      });
      onMintSuccess(dog);
    } catch {
      setError("Minting failed. Please try again.");
      setMinting(false);
    }
  }

  return (
    <div className="animate-slide-in flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">Preview & Mint</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Your dog is ready to join the pack 🎉
        </p>
      </div>

      <div className="bg-muted rounded-2xl p-6 flex flex-col items-center gap-3">
        <DogSVG
          breed={breed}
          coatColor={coatColor}
          eyeColor={eyeColor}
          accessory={accessory}
          size={150}
        />
        <h3 className="text-2xl font-extrabold text-foreground">{name}</h3>
        <span className="text-sm font-semibold text-primary">{breedLabel}</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Breed", value: breedLabel },
          { label: "Coat", value: coatLabel },
          { label: "Eyes", value: eyeLabel },
          { label: "Accessory", value: accLabel },
        ].map((trait) => (
          <div
            key={trait.label}
            className="bg-card border border-border rounded-xl p-3"
          >
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
              {trait.label}
            </p>
            <p className="text-sm font-bold text-foreground mt-0.5 capitalize">
              {trait.value}
            </p>
          </div>
        ))}
      </div>

      {error && (
        <p
          className="text-sm text-destructive font-semibold text-center"
          data-ocid="preview.error_state"
        >
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={minting}
          data-ocid="preview.secondary_button"
          className="flex-1 py-3 rounded-full font-bold text-foreground bg-muted hover:bg-muted/80 disabled:opacity-40 transition-all duration-200"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleMint}
          disabled={minting}
          data-ocid="preview.primary_button"
          className="flex-grow py-3 rounded-full font-bold text-primary-foreground bg-primary hover:bg-primary/90 disabled:opacity-60 transition-all duration-200 shadow-card flex items-center justify-center gap-2"
        >
          {minting ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                role="img"
                aria-label="loading"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Minting...
            </>
          ) : (
            "🐾 Mint My Dog"
          )}
        </button>
      </div>

      {minting && (
        <p
          className="text-xs text-center text-muted-foreground"
          data-ocid="preview.loading_state"
        >
          Minting your dog on the Internet Computer…
        </p>
      )}
    </div>
  );
}
