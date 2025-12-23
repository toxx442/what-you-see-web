import { cn } from "@/lib/utils";

interface EyeLogoProps {
  className?: string;
}

/**
 * Animated eye + globe logo for "What You See".
 *
 * The blink animation itself is handled via the global `.eye-logo` class
 * in `globals.css`, so this component just renders the SVG and accepts
 * sizing/styling via `className`.
 */
export function EyeLogo({ className }: EyeLogoProps) {
  return (
    <svg
      viewBox="0 0 900 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="What You See logo — stylised eye with globe pupil"
      className={cn("eye-logo", className)}
    >
      <defs>
        {/* Clip path for globe inside eye */}
        <clipPath id="eyeClip">
          <path d="M60 210 Q450 50 840 210 Q450 370 60 210 Z" />
        </clipPath>
      </defs>

      {/* Local styles scoped to this SVG for stroke/fill colours */}
      <style>{`
        .wys-eye-pink {
          stroke: #c89bc8;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .wys-eye-cyan {
          fill: #5dd9d1;
        }
        .wys-eye-scale {
          /* Slightly slim in X, taller in Y for a more open, bold eye */
          transform: scale(0.8, 1.15);
          transform-origin: 50% 50%;
        }
      `}</style>

      {/* Slimmed eye group so the eye appears narrower */}
      <g className="wys-eye-scale">
        {/* Globe with grid (clipped to eye shape) */}
        <g clipPath="url(#eyeClip)">
          {/* Cyan globe fill */}
          <ellipse className="wys-eye-cyan" cx="450" cy="210" rx="110" ry="100" />

          {/* Pink grid lines */}
          {/* Outer circle */}
          <ellipse
            className="wys-eye-pink"
            strokeWidth="14"
            cx="450"
            cy="210"
            rx="110"
            ry="100"
          />

          {/* Horizontal lines */}
          <ellipse
            className="wys-eye-pink"
            strokeWidth="12"
            cx="450"
            cy="210"
            rx="110"
            ry="65"
          />
          <ellipse
            className="wys-eye-pink"
            strokeWidth="12"
            cx="450"
            cy="210"
            rx="110"
            ry="30"
          />

          {/* Vertical lines */}
          <line
            className="wys-eye-pink"
            strokeWidth="12"
            x1="450"
            y1="110"
            x2="450"
            y2="310"
          />
          <line
            className="wys-eye-pink"
            strokeWidth="12"
            x1="395"
            y1="130"
            x2="395"
            y2="290"
          />
          <line
            className="wys-eye-pink"
            strokeWidth="12"
            x1="505"
            y1="130"
            x2="505"
            y2="290"
          />
          <line
            className="wys-eye-pink"
            strokeWidth="12"
            x1="350"
            y1="155"
            x2="350"
            y2="265"
          />
          <line
            className="wys-eye-pink"
            strokeWidth="12"
            x1="550"
            y1="155"
            x2="550"
            y2="265"
          />
        </g>

        {/* Eye outline (drawn on top) */}
        <path
          className="wys-eye-pink"
          strokeWidth="35"
          d="M60 210 Q450 50 840 210 Q450 370 60 210 Z"
        />

        {/* Eyelashes: roots sampled along the top lid curve, symmetrically arranged */}
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="100"
          y1="195"
          x2="80"
          y2="135"
        />
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="215"
          y1="159"
          x2="200"
          y2="105"
        />
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="333"
          y1="137"
          x2="330"
          y2="90"
        />
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="450"
          y1="130"
          x2="450"
          y2="80"
        />
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="567"
          y1="137"
          x2="570"
          y2="90"
        />
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="684"
          y1="159"
          x2="700"
          y2="105"
        />
        <line
          className="wys-eye-pink"
          strokeWidth="32"
          x1="801"
          y1="195"
          x2="820"
          y2="135"
        />
      </g>
    </svg>
  );
}
