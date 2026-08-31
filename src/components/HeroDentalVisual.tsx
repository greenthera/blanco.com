const TOOTH_PATH =
  "M144 112c-27 13-39 45-31 79 7 29 22 47 27 83 6 43 14 75 33 75 17 0 18-62 37-62s20 62 37 62c19 0 27-32 33-75 5-36 20-54 27-83 8-34-4-66-31-79-26-12-45 8-66 8s-40-20-66-8Z";

export function HeroDentalVisual() {
  return (
    <div className="dental-motion" aria-hidden="true">
      <svg viewBox="0 0 420 420" focusable="false">
        <g className="dental-ripple">
          <circle cx="210" cy="210" r="150" />
          <circle cx="210" cy="210" r="200" />
          <circle cx="210" cy="210" r="252" />
        </g>
        <circle className="tooth-disc" cx="210" cy="210" r="166" />
        <g className="tooth-float">
          <path className="tooth-outline" pathLength={1000} d={TOOTH_PATH} />
          <path className="tooth-smile" d="M171 218c22 19 57 19 79 0" />
        </g>
      </svg>
    </div>
  );
}
