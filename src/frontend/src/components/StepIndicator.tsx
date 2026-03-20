const STEPS = [
  { key: "breed", label: "Breed" },
  { key: "traits", label: "Traits" },
  { key: "name", label: "Name" },
  { key: "mint", label: "Mint" },
];

type WizardStep = "breed" | "traits" | "name" | "mint" | "success";

const STEP_INDEX: Record<WizardStep, number> = {
  breed: 0,
  traits: 1,
  name: 2,
  mint: 3,
  success: 4,
};

interface StepIndicatorProps {
  currentStep: WizardStep;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const current = STEP_INDEX[currentStep];

  return (
    <div
      className="flex items-center gap-0 w-full"
      data-ocid="wizard.step_indicator"
    >
      {STEPS.map((step, idx) => (
        <div key={step.key} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                idx < current
                  ? "bg-primary text-primary-foreground"
                  : idx === current
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {idx < current ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  role="img"
                  aria-label="completed"
                >
                  <path
                    d="M2 7l3.5 3.5L12 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                idx + 1
              )}
            </div>
            <span
              className={`text-xs font-semibold hidden sm:block ${
                idx <= current ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
          {idx < STEPS.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 transition-all duration-500 ${
                idx < current ? "bg-primary" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
