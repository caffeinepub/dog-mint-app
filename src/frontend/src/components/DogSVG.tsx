import type { ReactElement } from "react";

interface DogSVGProps {
  breed: string;
  coatColor: string;
  eyeColor: string;
  accessory: string;
  size?: number;
}

const COAT_HEX: Record<string, string> = {
  golden: "#D4A017",
  brown: "#795548",
  black: "#2E2E2E",
  white: "#F0EDE4",
  gray: "#9E9E9E",
  cream: "#FFF0C8",
  spotted: "#F0EDE4",
};

const EYE_HEX: Record<string, [string, string]> = {
  brown: ["#5D4037", "#5D4037"],
  blue: ["#1565C0", "#1565C0"],
  green: ["#2E7D32", "#2E7D32"],
  amber: ["#FF8F00", "#FF8F00"],
  heterochromia: ["#5D4037", "#1565C0"],
};

function darken(hex: string, factor = 0.55): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.round(r * factor)},${Math.round(g * factor)},${Math.round(b * factor)})`;
}

function lighten(hex: string, amount = 30): string {
  const r = Math.min(255, Number.parseInt(hex.slice(1, 3), 16) + amount);
  const g = Math.min(255, Number.parseInt(hex.slice(3, 5), 16) + amount);
  const b = Math.min(255, Number.parseInt(hex.slice(5, 7), 16) + amount);
  return `rgb(${r},${g},${b})`;
}

function getEarPaths(breed: string, coat: string): ReactElement {
  const fill = COAT_HEX[coat] ?? COAT_HEX.golden;
  const stroke = darken(fill, 0.5);
  const innerFill = lighten(fill, 15);

  switch (breed) {
    case "poodle":
      return (
        <g>
          <circle
            cx="46"
            cy="68"
            r="20"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
          />
          <circle cx="46" cy="68" r="14" fill={innerFill} stroke="none" />
          <circle
            cx="114"
            cy="68"
            r="20"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
          />
          <circle cx="114" cy="68" r="14" fill={innerFill} stroke="none" />
        </g>
      );
    case "bulldog":
      return (
        <g>
          <path
            d="M 52,72 C 44,68 38,75 40,86 C 42,94 52,93 55,85 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 108,72 C 116,68 122,75 120,86 C 118,94 108,93 105,85 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      );
    case "beagle":
      return (
        <g>
          <path
            d="M 53,72 C 42,75 24,94 26,120 C 28,134 42,132 46,120 C 50,105 56,85 58,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 107,72 C 118,75 136,94 134,120 C 132,134 118,132 114,120 C 110,105 104,85 102,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      );
    case "labrador":
      return (
        <g>
          <path
            d="M 53,72 C 44,74 32,90 34,112 C 36,122 47,120 50,110 C 53,96 57,82 58,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 107,72 C 116,74 128,90 126,112 C 124,122 113,120 110,110 C 107,96 103,82 102,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      );
    case "husky":
      return (
        <g>
          <path
            d="M 55,72 L 44,28 L 70,54 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M 57,70 L 48,35 L 67,56 Z" fill={innerFill} stroke="none" />
          <path
            d="M 105,72 L 116,28 L 90,54 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 103,70 L 112,35 L 93,56 Z"
            fill={innerFill}
            stroke="none"
          />
        </g>
      );
    case "corgi":
      return (
        <g>
          <path
            d="M 54,74 L 36,18 L 74,56 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M 56,72 L 42,25 L 70,58 Z" fill={innerFill} stroke="none" />
          <path
            d="M 106,74 L 124,18 L 86,56 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 104,72 L 118,25 L 90,58 Z"
            fill={innerFill}
            stroke="none"
          />
        </g>
      );
    case "dalmatian":
      return (
        <g>
          <path
            d="M 53,72 C 44,74 32,90 34,112 C 36,122 47,120 50,110 C 53,96 57,82 58,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 107,72 C 116,74 128,90 126,112 C 124,122 113,120 110,110 C 107,96 103,82 102,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      );
    case "shiba":
      return (
        <g>
          <path
            d="M 55,72 L 46,36 L 68,57 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M 57,70 L 50,42 L 65,58 Z" fill={innerFill} stroke="none" />
          <path
            d="M 105,72 L 114,36 L 92,57 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 103,70 L 110,42 L 95,58 Z"
            fill={innerFill}
            stroke="none"
          />
        </g>
      );
    default:
      return (
        <g>
          <path
            d="M 53,72 C 44,74 32,90 34,112 C 36,122 47,120 50,110 C 53,96 57,82 58,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 107,72 C 116,74 128,90 126,112 C 124,122 113,120 110,110 C 107,96 103,82 102,75 Z"
            fill={fill}
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      );
  }
}

function getTailPath(breed: string): string {
  switch (breed) {
    case "husky":
      return "M 130,148 C 148,130 160,115 152,100 C 148,92 140,98 138,108";
    case "corgi":
      return "M 128,150 C 136,148 140,144 138,140";
    case "poodle":
      return "M 128,148 C 146,132 154,118 146,105 C 142,98 135,104 134,114";
    case "bulldog":
      return "M 126,150 C 132,146 135,142 132,138";
    default:
      return "M 128,148 C 144,136 150,122 142,112 C 138,106 132,110 132,118";
  }
}

function getAccessoryElement(accessory: string): ReactElement | null {
  switch (accessory) {
    case "collar":
      return (
        <g>
          <rect
            x="62"
            y="116"
            width="36"
            height="9"
            rx="4.5"
            fill="#C0392B"
            stroke="#922B21"
            strokeWidth="1"
          />
          <circle
            cx="80"
            cy="120.5"
            r="4"
            fill="#F4D03F"
            stroke="#D4AC0D"
            strokeWidth="0.8"
          />
        </g>
      );
    case "hat":
      return (
        <g>
          <ellipse
            cx="80"
            cy="52"
            rx="22"
            ry="5"
            fill="#E74C3C"
            stroke="#C0392B"
            strokeWidth="1"
          />
          <path
            d="M 62,52 L 80,10 L 98,52 Z"
            fill="#E74C3C"
            stroke="#C0392B"
            strokeWidth="1"
          />
          <line
            x1="71"
            y1="31"
            x2="69"
            y2="52"
            stroke="#F9E79F"
            strokeWidth="2"
          />
          <line
            x1="80"
            y1="10"
            x2="89"
            y2="42"
            stroke="#F9E79F"
            strokeWidth="2"
          />
          <circle cx="80" cy="10" r="5" fill="#F9E79F" />
        </g>
      );
    case "bandana":
      return (
        <g>
          <path
            d="M 60,118 L 80,132 L 100,118 L 80,112 Z"
            fill="#E74C3C"
            stroke="#C0392B"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <circle cx="72" cy="122" r="1.5" fill="rgba(255,255,255,0.6)" />
          <circle cx="80" cy="126" r="1.5" fill="rgba(255,255,255,0.6)" />
          <circle cx="88" cy="122" r="1.5" fill="rgba(255,255,255,0.6)" />
        </g>
      );
    case "bowtie":
      return (
        <g>
          <path
            d="M 66,120 L 78,115 L 78,125 Z"
            fill="#8E44AD"
            stroke="#6C3483"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M 94,120 L 82,115 L 82,125 Z"
            fill="#8E44AD"
            stroke="#6C3483"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <circle
            cx="80"
            cy="120"
            r="3.5"
            fill="#A569BD"
            stroke="#6C3483"
            strokeWidth="0.8"
          />
        </g>
      );
    case "glasses":
      return (
        <g>
          <circle
            cx="68"
            cy="84"
            r="10"
            fill="rgba(135,206,250,0.35)"
            stroke="#444"
            strokeWidth="1.5"
          />
          <circle
            cx="92"
            cy="84"
            r="10"
            fill="rgba(135,206,250,0.35)"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="78"
            y1="84"
            x2="82"
            y2="84"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="58"
            y1="82"
            x2="52"
            y2="80"
            stroke="#444"
            strokeWidth="1.5"
          />
          <line
            x1="102"
            y1="82"
            x2="108"
            y2="80"
            stroke="#444"
            strokeWidth="1.5"
          />
        </g>
      );
    default:
      return null;
  }
}

export function DogSVG({
  breed,
  coatColor,
  eyeColor,
  accessory,
  size = 160,
}: DogSVGProps) {
  const fill = COAT_HEX[coatColor] ?? COAT_HEX.golden;
  const stroke = darken(fill, 0.48);
  const muzzleFill = lighten(fill, 20);
  const [leftEye, rightEye] = EYE_HEX[eyeColor] ?? EYE_HEX.brown;
  const tailPath = getTailPath(breed);

  const headRx = breed === "bulldog" ? 38 : 33;
  const headRy = breed === "bulldog" ? 36 : 33;
  const headCy = breed === "poodle" ? 86 : 85;
  const bodyRx = breed === "bulldog" ? 56 : 50;
  const bodyRy = breed === "bulldog" ? 34 : 35;

  return (
    <svg
      viewBox="0 0 160 185"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${breed} dog illustration`}
      style={{ display: "block" }}
    >
      <path
        d={tailPath}
        fill="none"
        stroke={fill}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={tailPath}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <ellipse
        cx="80"
        cy="148"
        rx={bodyRx}
        ry={bodyRy}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />

      <rect
        x="55"
        y="170"
        width="14"
        height="14"
        rx="7"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <rect
        x="73"
        y="173"
        width="13"
        height="11"
        rx="6.5"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <rect
        x="93"
        y="173"
        width="13"
        height="11"
        rx="6.5"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      <rect
        x="111"
        y="170"
        width="14"
        height="14"
        rx="7"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />

      <ellipse
        cx="62"
        cy="183"
        rx="7"
        ry="3.5"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />
      <ellipse
        cx="79.5"
        cy="183"
        rx="6.5"
        ry="3"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />
      <ellipse
        cx="99.5"
        cy="183"
        rx="6.5"
        ry="3"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />
      <ellipse
        cx="118"
        cy="183"
        rx="7"
        ry="3.5"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />

      <ellipse
        cx="80"
        cy="122"
        rx="22"
        ry="14"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />

      {getEarPaths(breed, coatColor)}

      <ellipse
        cx="80"
        cy={headCy}
        rx={headRx}
        ry={headRy}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />

      {coatColor === "spotted" && (
        <g>
          <ellipse cx="68" cy="148" rx="8" ry="6" fill="#333" opacity="0.7" />
          <ellipse cx="92" cy="138" rx="6" ry="4" fill="#333" opacity="0.7" />
          <ellipse cx="85" cy="160" rx="5" ry="4" fill="#333" opacity="0.7" />
          <ellipse cx="62" cy="158" rx="4" ry="3" fill="#333" opacity="0.65" />
          <ellipse cx="100" cy="155" rx="4" ry="3" fill="#333" opacity="0.65" />
          <ellipse cx="75" cy="90" rx="5" ry="4" fill="#333" opacity="0.6" />
          <ellipse cx="90" cy="95" rx="4" ry="3" fill="#333" opacity="0.6" />
        </g>
      )}

      {breed === "bulldog" ? (
        <ellipse
          cx="80"
          cy="104"
          rx="20"
          ry="14"
          fill={muzzleFill}
          stroke={stroke}
          strokeWidth="1"
        />
      ) : (
        <ellipse
          cx="80"
          cy="100"
          rx="17"
          ry="12"
          fill={muzzleFill}
          stroke={stroke}
          strokeWidth="1"
        />
      )}

      <ellipse
        cx="80"
        cy={breed === "bulldog" ? "98" : "95"}
        rx="7"
        ry="5"
        fill="#1a1a1a"
      />
      <ellipse
        cx="78"
        cy={breed === "bulldog" ? "96.5" : "93.5"}
        rx="2"
        ry="1.5"
        fill="rgba(255,255,255,0.4)"
      />

      <path
        d={
          breed === "bulldog"
            ? "M 74,106 Q 80,112 86,106"
            : "M 74,102 Q 80,108 86,102"
        }
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="66"
        cy="77"
        r="9"
        fill="white"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle cx="67" cy="77" r="5.5" fill={leftEye} />
      <circle cx="67.5" cy="76.5" r="2.5" fill="#111" />
      <circle cx="69" cy="74.5" r="1.5" fill="white" />

      <circle
        cx="94"
        cy="77"
        r="9"
        fill="white"
        stroke={stroke}
        strokeWidth="1"
      />
      <circle cx="93" cy="77" r="5.5" fill={rightEye} />
      <circle cx="93.5" cy="76.5" r="2.5" fill="#111" />
      <circle cx="95" cy="74.5" r="1.5" fill="white" />

      <path
        d="M 60,70 Q 66,66 72,68"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 88,68 Q 94,66 100,70"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {(breed === "husky" || breed === "shiba") && (
        <ellipse
          cx="80"
          cy="88"
          rx="14"
          ry="10"
          fill="rgba(255,255,255,0.45)"
        />
      )}

      {getAccessoryElement(accessory)}
    </svg>
  );
}
