import { ACCESSORIES, COAT_COLORS, EYE_COLORS } from "../../data/dogData";
import { DogSVG } from "../DogSVG";

interface TraitsStepProps {
  breed: string;
  coatColor: string;
  eyeColor: string;
  accessory: string;
  onCoatChange: (v: string) => void;
  onEyeChange: (v: string) => void;
  onAccessoryChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TraitsStep({
  breed,
  coatColor,
  eyeColor,
  accessory,
  onCoatChange,
  onEyeChange,
  onAccessoryChange,
  onNext,
  onBack,
}: TraitsStepProps) {
  return (
    <div className="animate-slide-in flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-foreground">Customize Traits</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Make your dog truly one-of-a-kind ✨
        </p>
      </div>

      {/* Coat Color */}
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-foreground">Coat Color</span>
        <div
          className="flex flex-wrap gap-2"
          data-ocid="traits.coat_color.list"
        >
          {COAT_COLORS.map((c, i) => (
            <button
              key={c.key}
              type="button"
              onClick={() => onCoatChange(c.key)}
              data-ocid={`traits.coat_color.item.${i + 1}`}
              title={c.name}
              className="flex flex-col items-center gap-1"
            >
              <span
                className={`w-9 h-9 rounded-full border-2 transition-all duration-200 block ${
                  coatColor === c.key
                    ? "border-primary scale-110 shadow-card ring-2 ring-primary/30"
                    : "border-border hover:border-primary/50 hover:scale-105"
                }`}
                style={{ backgroundColor: c.hex }}
              />
              <span className="text-[10px] font-semibold text-muted-foreground">
                {c.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Eye Color */}
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-foreground">Eye Color</span>
        <div className="flex flex-wrap gap-2" data-ocid="traits.eye_color.list">
          {EYE_COLORS.map((c, i) => (
            <button
              key={c.key}
              type="button"
              onClick={() => onEyeChange(c.key)}
              data-ocid={`traits.eye_color.item.${i + 1}`}
              title={c.name}
              className="flex flex-col items-center gap-1"
            >
              <span
                className={`w-9 h-9 rounded-full border-2 transition-all duration-200 block ${
                  eyeColor === c.key
                    ? "border-primary scale-110 shadow-card ring-2 ring-primary/30"
                    : "border-border hover:border-primary/50 hover:scale-105"
                }`}
                style={{ backgroundColor: c.hex }}
              />
              <span className="text-[10px] font-semibold text-muted-foreground">
                {c.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Accessory */}
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-foreground">Accessory</span>
        <div className="flex flex-wrap gap-2" data-ocid="traits.accessory.list">
          {ACCESSORIES.map((acc, i) => (
            <button
              key={acc.key}
              type="button"
              onClick={() => onAccessoryChange(acc.key)}
              data-ocid={`traits.accessory.item.${i + 1}`}
              className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                accessory === acc.key
                  ? "bg-primary border-primary text-primary-foreground shadow-card"
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              {acc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mini live preview */}
      <div className="flex items-center justify-center py-2">
        <div className="bg-muted rounded-2xl p-3 flex items-center gap-3">
          <DogSVG
            breed={breed}
            coatColor={coatColor}
            eyeColor={eyeColor}
            accessory={accessory}
            size={80}
          />
          <p className="text-xs text-muted-foreground font-medium">
            Live preview
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          data-ocid="traits.secondary_button"
          className="flex-1 py-3 rounded-full font-bold text-foreground bg-muted hover:bg-muted/80 transition-all duration-200"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          data-ocid="traits.primary_button"
          className="flex-1 py-3 rounded-full font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 shadow-card"
        >
          Preview →
        </button>
      </div>
    </div>
  );
}
