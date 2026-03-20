import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import type { Dog } from "../backend.d";
import { DogSVG } from "../components/DogSVG";
import { StepIndicator } from "../components/StepIndicator";
import { BreedStep } from "../components/wizard/BreedStep";
import { NameStep } from "../components/wizard/NameStep";
import { PreviewStep } from "../components/wizard/PreviewStep";
import { TraitsStep } from "../components/wizard/TraitsStep";
import { BREEDS } from "../data/dogData";

type WizardStep = "breed" | "name" | "traits" | "preview" | "success";

interface WizardState {
  step: WizardStep;
  breed: string;
  name: string;
  coatColor: string;
  eyeColor: string;
  accessory: string;
  mintedDog?: Dog;
}

export function WizardPage() {
  const navigate = useNavigate();
  const [state, setState] = useState<WizardState>({
    step: "breed",
    breed: "",
    name: "",
    coatColor: "golden",
    eyeColor: "brown",
    accessory: "none",
  });

  function update(patch: Partial<WizardState>) {
    setState((prev) => ({ ...prev, ...patch }));
  }

  const breedLabel = BREEDS.find((b) => b.key === state.breed)?.name ?? "";

  if (state.step === "success" && state.mintedDog) {
    return (
      <main className="min-h-screen py-12 px-6 flex items-center justify-center paw-pattern">
        <div className="bg-card border border-border rounded-3xl shadow-hero p-8 max-w-sm w-full flex flex-col items-center gap-6 animate-bounce-in">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-4xl">
            🎉
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-foreground">
              Congratulations!
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              <strong className="text-foreground">
                {state.mintedDog.name}
              </strong>{" "}
              has been minted on the Internet Computer!
            </p>
          </div>
          <DogSVG
            breed={state.mintedDog.breed}
            coatColor={state.mintedDog.coatColor}
            eyeColor={state.mintedDog.eyeColor}
            accessory={state.mintedDog.accessory}
            size={160}
          />
          <div className="flex gap-3 w-full">
            <button
              type="button"
              onClick={() => navigate({ to: "/gallery" })}
              data-ocid="success.primary_button"
              className="flex-1 py-3 rounded-full bg-primary text-primary-foreground font-bold shadow-card hover:bg-primary/90 transition-all"
            >
              View My Dogs 🐾
            </button>
            <button
              type="button"
              onClick={() =>
                setState({
                  step: "breed",
                  breed: "",
                  name: "",
                  coatColor: "golden",
                  eyeColor: "brown",
                  accessory: "none",
                })
              }
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
          <div className="bg-card border border-border rounded-3xl shadow-card p-6">
            {state.step !== "success" && (
              <div className="mb-6">
                <StepIndicator currentStep={state.step} />
              </div>
            )}

            {state.step === "breed" && (
              <BreedStep
                selected={state.breed}
                onSelect={(breed) => {
                  const defaultCoat =
                    BREEDS.find((b) => b.key === breed)?.defaultCoat ??
                    "golden";
                  update({ breed, coatColor: defaultCoat });
                }}
                onNext={() => update({ step: "name" })}
              />
            )}
            {state.step === "name" && (
              <NameStep
                name={state.name}
                onChange={(name) => update({ name })}
                onNext={() => update({ step: "traits" })}
                onBack={() => update({ step: "breed" })}
              />
            )}
            {state.step === "traits" && (
              <TraitsStep
                breed={state.breed}
                coatColor={state.coatColor}
                eyeColor={state.eyeColor}
                accessory={state.accessory}
                onCoatChange={(coatColor) => update({ coatColor })}
                onEyeChange={(eyeColor) => update({ eyeColor })}
                onAccessoryChange={(accessory) => update({ accessory })}
                onNext={() => update({ step: "preview" })}
                onBack={() => update({ step: "name" })}
              />
            )}
            {state.step === "preview" && (
              <PreviewStep
                breed={state.breed}
                name={state.name}
                coatColor={state.coatColor}
                eyeColor={state.eyeColor}
                accessory={state.accessory}
                onMintSuccess={(dog) =>
                  update({ step: "success", mintedDog: dog })
                }
                onBack={() => update({ step: "traits" })}
              />
            )}
          </div>

          <div className="bg-card border border-border rounded-3xl shadow-card p-6 flex flex-col items-center gap-4 sticky top-24">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
              Live Preview
            </h3>
            <div className="bg-muted rounded-2xl p-6 w-full flex items-center justify-center">
              <DogSVG
                breed={state.breed || "labrador"}
                coatColor={state.coatColor}
                eyeColor={state.eyeColor}
                accessory={state.accessory}
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
                state.coatColor && {
                  label: state.coatColor,
                  color: "bg-accent/20 text-accent-foreground",
                },
                state.eyeColor && {
                  label: `${state.eyeColor} eyes`,
                  color: "bg-primary/10 text-primary",
                },
                state.accessory !== "none" && {
                  label: state.accessory,
                  color: "bg-secondary/30 text-secondary-foreground",
                },
              ]
                .filter(Boolean)
                .map((badge) => (
                  <span
                    key={(badge as { label: string }).label}
                    className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${(badge as { color: string }).color}`}
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
