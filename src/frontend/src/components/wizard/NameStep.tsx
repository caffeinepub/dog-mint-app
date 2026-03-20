import { useState } from "react";

interface NameStepProps {
  name: string;
  onChange: (name: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function NameStep({ name, onChange, onNext, onBack }: NameStepProps) {
  const [touched, setTouched] = useState(false);
  const isValid = name.trim().length > 0 && name.length <= 30;
  const showError = touched && !isValid;

  return (
    <div className="animate-slide-in flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">Name Your Dog</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Give your furry friend a unique identity 🏷️
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="dog-name"
          className="text-sm font-semibold text-foreground"
        >
          Dog Name
        </label>
        <input
          id="dog-name"
          type="text"
          value={name}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="e.g. Captain Biscuit"
          maxLength={30}
          data-ocid="name.input"
          className={`w-full px-4 py-3 rounded-xl border-2 bg-card text-foreground placeholder:text-muted-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
            showError
              ? "border-destructive"
              : "border-border focus:border-primary"
          }`}
        />
        <div className="flex justify-between items-center">
          {showError ? (
            <span
              className="text-xs text-destructive font-medium"
              data-ocid="name.error_state"
            >
              Please enter a name (max 30 characters)
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">
              Make it memorable!
            </span>
          )}
          <span
            className={`text-xs font-semibold ${name.length > 25 ? "text-destructive" : "text-muted-foreground"}`}
          >
            {name.length}/30
          </span>
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        <button
          type="button"
          onClick={onBack}
          data-ocid="name.secondary_button"
          className="flex-1 py-3 rounded-full font-bold text-foreground bg-muted hover:bg-muted/80 transition-all duration-200"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => {
            setTouched(true);
            if (isValid) onNext();
          }}
          data-ocid="name.primary_button"
          className="flex-1 py-3 rounded-full font-bold text-primary-foreground bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-card"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
