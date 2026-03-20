import { COLORS, EYE_STYLES, MARKINGS } from "../../data/dogData";

interface TraitsStepProps {
  breed: string;
  color: string;
  eyes: string;
  markings: string;
  onColorChange: (v: string) => void;
  onEyesChange: (v: string) => void;
  onMarkingsChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TraitsStep({
  color,
  eyes,
  markings,
  onColorChange,
  onEyesChange,
  onMarkingsChange,
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

      {/* Color */}
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-foreground">Color</span>
        <div className="flex flex-wrap gap-3" data-ocid="traits.color.list">
          {COLORS.map((c, i) => (
            <button
              key={c.key}
              type="button"
              onClick={() => onColorChange(c.key)}
              data-ocid={`traits.color.item.${i + 1}`}
              title={c.name}
              className="flex flex-col items-center gap-1"
            >
              <span
                className={`w-9 h-9 rounded-full border-2 transition-all duration-200 block ${
                  color === c.key
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

      {/* Eye Style */}
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-foreground">Eye Style</span>
        <div className="flex flex-wrap gap-2" data-ocid="traits.eyes.list">
          {EYE_STYLES.map((e, i) => (
            <button
              key={e.key}
              type="button"
              onClick={() => onEyesChange(e.key)}
              data-ocid={`traits.eyes.item.${i + 1}`}
              className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                eyes === e.key
                  ? "bg-primary border-primary text-primary-foreground shadow-card"
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>

      {/* Markings */}
      <div className="flex flex-col gap-2.5">
        <span className="text-sm font-bold text-foreground">Markings</span>
        <div className="flex flex-wrap gap-2" data-ocid="traits.markings.list">
          {MARKINGS.map((m, i) => (
            <button
              key={m.key}
              type="button"
              onClick={() => onMarkingsChange(m.key)}
              data-ocid={`traits.markings.item.${i + 1}`}
              className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                markings === m.key
                  ? "bg-primary border-primary text-primary-foreground shadow-card"
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-2">
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
          Next →
        </button>
      </div>
    </div>
  );
}
