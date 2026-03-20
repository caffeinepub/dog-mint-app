import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import type { Dog } from "../backend.d";
import { DogSVG } from "../components/DogSVG";
import { StepIndicator } from "../components/StepIndicator";
import { BreedStep } from "../components/wizard/BreedStep";
import { MintStep } from "../components/wizard/MintStep";
import { NameStep } from "../components/wizard/NameStep";
import { TraitsStep } from "../components/wizard/TraitsStep";
import { BREEDS, COLORS, EYE_STYLES, MARKINGS } from "../data/dogData";

type WizardStep = "breed" | "traits" | "name" | "mint" | "success";

interface WizardState {
  step: WizardStep;
  breed: string;
  name: string;
  color: string;
  eyes: string;
  markings: string;
  mintedDog?: Dog;
}

const DEFAULT_STATE: WizardState = {
  step: "breed",
  breed: "",
  name: "",
  color: "golden",
  eyes: "round",
  markings: "none",
};

// Truncate a long dog ID for display
function shortId(id: string) {
  if (id.length <= 16) return id;
  return `${id.slice(0, 8)}…${id.slice(-6)}`;
}

export function WizardPage() {
  const navigate = useNavigate();
  const [state, setState] = useState<WizardState>(DEFAULT_STATE);

  function update(patch: Partial<WizardState>) {
    setState((prev) => ({ ...prev, ...patch }));
  }

  const breedLabel = BREEDS.find((b) => b.key === state.breed)?.name ?? "";
  const colorLabel =
    COLORS.find((c) => c.key === state.color)?.name ?? state.color;
  const eyeLabel =
    EYE_STYLES.find((e) => e.key === state.eyes)?.name ?? state.eyes;
  const markingsLabel =
    MARKINGS.find((m) => m.key === state.markings)?.name ?? state.markings;

  // ── SUCCESS SCREEN ────────────────────────────────────────────────────────
  if (state.step === "success" && state.mintedDog) {
    const dog = state.mintedDog;
    const mintedBreedLabel =
      BREEDS.find((b) => b.key === dog.breed)?.name ?? dog.breed;
    const mintedColorLabel =
      COLORS.find((c) => c.key === dog.color)?.name ?? dog.color;
    const mintedEyeLabel =
      EYE_STYLES.find((e) => e.key === dog.eyes)?.name ?? dog.eyes;
    const mintedMarkingsLabel =
      MARKINGS.find((m) => m.key === dog.markings)?.name ?? dog.markings;

    return (
      <main className="min-h-screen py-12 px-4 flex items-center justify-center paw-pattern">
        <div className="bg-card border border-border rounded-3xl shadow-hero p-8 max-w-md w-full flex flex-col items-center gap-6 animate-bounce-in">
          {/* Header */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl">
            🎉
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-foreground">
              {dog.name} is live!
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Successfully minted on the Internet Computer.
            </p>
          </div>

          {/* Dog preview */}
          <div className="bg-muted rounded-2xl p-6 w-full flex items-center justify-center">
            <DogSVG
              breed={dog.breed}
              color={dog.color}
              eyes={dog.eyes}
              markings={dog.markings}
              size={160}
            />
          </div>

          {/* Trait summary */}
          <div className="w-full grid grid-cols-2 gap-2">
            {[
              { label: "Breed", value: mintedBreedLabel },
              { label: "Name", value: dog.name },
              { label: "Color", value: mintedColorLabel },
              { label: "Eyes", value: mintedEyeLabel },
              { label: "Markings", value: mintedMarkingsLabel },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-muted/60 border border-border rounded-xl px-3 py-2"
              >
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-foreground mt-0.5 capitalize">
                  {item.value}
                </p>
              </div>
            ))}
            {/* Token ID spanning full width */}
            <div className="col-span-2 bg-muted/60 border border-border rounded-xl px-3 py-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                Token ID
              </p>
              <p className="text-xs font-mono text-foreground mt-0.5 break-all">
                {shortId(dog.id)}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full">
            <button
              type="button"
              onClick={() => navigate({ to: "/gallery" })}
              data-ocid="success.primary_button"
              className="flex-1 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all"
            >
              View My NFTs 🐾
            </button>
            <button
              type="button"
              onClick={() => setState(DEFAULT_STATE)}
              data-ocid="success.secondary_button"
              className="flex-1 py-3 rounded-full bg-muted text-foreground font-bold hover:bg-muted/80 transition-all"
            >
              Mint Another
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ── WIZARD FLOW ───────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen py-8 px-4 paw-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-foreground">
            Create Your Dog
          </h1>
          <p className="text-muted-foreground mt-2">
            Customize every detail, then mint it on ICP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Wizard card */}
          <div className="bg-card border border-border rounded-3xl shadow-card p-6">
            <div className="mb-6">
              <StepIndicator currentStep={state.step} />
            </div>

            {state.step === "breed" && (
              <BreedStep
                selected={state.breed}
                onSelect={(breed) => {
                  const defaultColor =
                    BREEDS.find((b) => b.key === breed)?.defaultColor ??
                    "golden";
                  update({ breed, color: defaultColor });
                }}
                onNext={() => update({ step: "traits" })}
              />
            )}
            {state.step === "traits" && (
              <TraitsStep
                breed={state.breed}
                color={state.color}
                eyes={state.eyes}
                markings={state.markings}
                onColorChange={(color) => update({ color })}
                onEyesChange={(eyes) => update({ eyes })}
                onMarkingsChange={(markings) => update({ markings })}
                onNext={() => update({ step: "name" })}
                onBack={() => update({ step: "breed" })}
              />
            )}
            {state.step === "name" && (
              <NameStep
                name={state.name}
                onChange={(name) => update({ name })}
                onNext={() => update({ step: "mint" })}
                onBack={() => update({ step: "traits" })}
              />
            )}
            {state.step === "mint" && (
              <MintStep
                breed={state.breed}
                name={state.name}
                color={state.color}
                eyes={state.eyes}
                markings={state.markings}
                onMintSuccess={(dog) =>
                  update({ step: "success", mintedDog: dog })
                }
                onBack={() => update({ step: "name" })}
              />
            )}
          </div>

          {/* Live preview panel */}
          <div className="bg-card border border-border rounded-3xl shadow-card p-6 flex flex-col items-center gap-4 sticky top-24">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Live Preview
            </h3>
            <div className="bg-muted rounded-2xl p-6 w-full flex items-center justify-center">
              <DogSVG
                breed={state.breed || "labrador"}
                color={state.color}
                eyes={state.eyes}
                markings={state.markings}
                size={200}
              />
            </div>
            {state.name && (
              <h4 className="text-xl font-extrabold text-foreground">
                {state.name}
              </h4>
            )}
            {breedLabel && (
              <span className="text-sm font-semibold text-primary">
                {breedLabel}
              </span>
            )}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                {
                  label: colorLabel,
                  color: "bg-accent/20 text-accent-foreground",
                },
                {
                  label: `${eyeLabel} eyes`,
                  color: "bg-primary/10 text-primary",
                },
                state.markings !== "none"
                  ? {
                      label: markingsLabel,
                      color: "bg-secondary/30 text-secondary-foreground",
                    }
                  : null,
              ]
                .filter(Boolean)
                .map((badge) => (
                  <span
                    key={(badge as { label: string }).label}
                    className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${
                      (badge as { color: string }).color
                    }`}
                  >
                    {(badge as { label: string }).label}
                  </span>
                ))}
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Your dog updates live as you customize 🐾
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
