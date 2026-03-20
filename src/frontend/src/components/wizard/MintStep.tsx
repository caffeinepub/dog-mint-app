import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import type { Dog } from "../../backend.d";
import { BREEDS, COLORS, EYE_STYLES, MARKINGS } from "../../data/dogData";
import { useActor } from "../../hooks/useActor";

interface MintStepProps {
  breed: string;
  name: string;
  color: string;
  eyes: string;
  markings: string;
  onMintSuccess: (dog: Dog) => void;
  onBack: () => void;
}

export function MintStep({
  breed,
  name,
  color,
  eyes,
  markings,
  onMintSuccess,
  onBack,
}: MintStepProps) {
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const breedLabel = BREEDS.find((b) => b.key === breed)?.name ?? breed;
  const colorLabel = COLORS.find((c) => c.key === color)?.name ?? color;
  const eyeLabel = EYE_STYLES.find((e) => e.key === eyes)?.name ?? eyes;
  const markingsLabel =
    MARKINGS.find((m) => m.key === markings)?.name ?? markings;

  async function handleMint() {
    if (!actor) {
      setError("Not connected. Please wait and try again.");
      return;
    }
    if (minting) return; // duplicate-click guard

    // 1. Validate
    if (!name.trim()) {
      setError("Please enter a name before minting.");
      return;
    }

    // 2. Set loading
    setMinting(true);
    setError(null);

    try {
      // 3. Call canister
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dog = (await (actor as any).mintDog({
        breed,
        name,
        color,
        eyes,
        markings,
      })) as Dog;

      // 4. Refresh owned NFT list in background
      await queryClient.invalidateQueries({ queryKey: ["myDogs"] });

      // 5. Transition to success — do NOT re-enable button
      onMintSuccess(dog);
    } catch (err: unknown) {
      // 6. On failure: show error, preserve selections, re-enable button
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(
        `Mint failed: ${msg}. Your selections were preserved so you can retry.`,
      );
      setMinting(false);
    }
  }

  return (
    <div className="animate-slide-in flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">Mint Your Dog</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Ready to claim <strong className="text-foreground">{name}</strong> on
          the Internet Computer?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Breed", value: breedLabel },
          { label: "Name", value: name },
          { label: "Color", value: colorLabel },
          { label: "Eyes", value: eyeLabel },
          { label: "Markings", value: markingsLabel },
        ].map((trait) => (
          <div
            key={trait.label}
            className="bg-muted border border-border rounded-xl p-3"
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
        <div
          className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3"
          data-ocid="mint.error_state"
        >
          <p className="text-sm text-destructive font-semibold">{error}</p>
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={minting}
          data-ocid="mint.secondary_button"
          className="flex-1 py-3 rounded-full font-bold text-foreground bg-muted hover:bg-muted/80 disabled:opacity-40 transition-all duration-200"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleMint}
          disabled={minting}
          data-ocid="mint.primary_button"
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
              Minting…
            </>
          ) : (
            "🐾 Mint My Dog"
          )}
        </button>
      </div>

      {minting && (
        <p
          className="text-xs text-center text-muted-foreground"
          data-ocid="mint.loading_state"
        >
          Claiming your dog on the Internet Computer. This may take a moment…
        </p>
      )}
    </div>
  );
}
