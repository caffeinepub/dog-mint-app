import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
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

function shortId(id: string) {
  if (id.length <= 16) return id;
  return `${id.slice(0, 8)}\u2026${id.slice(-6)}`;
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
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card border border-border rounded-3xl shadow-hero p-8 max-w-md w-full flex flex-col items-center gap-6"
        >
          {/* Celebration badge */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl animate-bounce-in">
            🎉
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-display font-extrabold text-foreground tracking-tight">
              {dog.name} is live!
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Successfully minted on the Internet Computer.
            </p>
          </div>

          {/* Dog preview */}
          <div className="bg-gradient-to-b from-primary/8 to-muted rounded-2xl p-6 w-full flex items-center justify-center border border-border">
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
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-foreground mt-0.5 capitalize">
                  {item.value}
                </p>
              </div>
            ))}
            <div className="col-span-2 bg-muted/60 border border-border rounded-xl px-3 py-2">
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                Token ID
              </p>
              <p className="text-xs font-mono text-foreground/60 mt-0.5 break-all">
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
              className="flex-1 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              View My NFTs 🐾
            </button>
            <button
              type="button"
              onClick={() => setState(DEFAULT_STATE)}
              data-ocid="success.secondary_button"
              className="flex-1 py-3.5 rounded-full bg-muted text-foreground font-bold hover:bg-muted/80 transition-all"
            >
              Mint Another
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  // ── WIZARD FLOW ───────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen py-10 px-4 paw-pattern">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2">
            Creation Studio
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground tracking-tight">
            Create Your Dog
          </h1>
          <p className="text-muted-foreground mt-2 text-base">
            Customize every detail, then mint it on ICP — permanently yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Wizard card */}
          <motion.div
            key={state.step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-3xl shadow-card p-7"
          >
            <div className="mb-7">
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
          </motion.div>

          {/* Live preview panel */}
          <div className="bg-card border border-border rounded-3xl shadow-card p-7 flex flex-col items-center gap-5 sticky top-24">
            {/* Preview label */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.18em]">
                Live Preview
              </h3>
            </div>

            {/* Dog canvas */}
            <div className="bg-gradient-to-b from-primary/6 to-muted rounded-2xl p-8 w-full flex items-center justify-center border border-border">
              <DogSVG
                breed={state.breed || "labrador"}
                color={state.color}
                eyes={state.eyes}
                markings={state.markings}
                size={200}
              />
            </div>

            {/* Dog name */}
            {state.name ? (
              <h4 className="text-2xl font-display font-extrabold text-foreground tracking-tight">
                {state.name}
              </h4>
            ) : (
              <h4 className="text-lg font-display font-bold text-muted-foreground/40 tracking-tight">
                Unnamed Dog
              </h4>
            )}

            {/* Breed badge */}
            {breedLabel && (
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                {breedLabel}
              </span>
            )}

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground capitalize">
                {colorLabel}
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary capitalize">
                {eyeLabel} eyes
              </span>
              {state.markings !== "none" && (
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/30 text-secondary-foreground capitalize">
                  {markingsLabel}
                </span>
              )}
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Updates instantly as you customize 🐾
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
