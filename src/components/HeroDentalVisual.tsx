export function HeroDentalVisual() {
  return (
    <div className="dental-motion" aria-hidden="true">
      <svg viewBox="0 0 420 420" focusable="false">
        <defs>
          <linearGradient id="tooth-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.58" stopColor="#fffdf8" />
            <stop offset="1" stopColor="#e9f1e5" />
          </linearGradient>
          <radialGradient id="dental-glow">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#dce8d7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="dental-glow" cx="210" cy="210" r="150" />
        <circle
          className="dental-orbit dental-orbit-outer"
          cx="210"
          cy="210"
          r="174"
        />
        <circle
          className="dental-orbit dental-orbit-inner"
          cx="210"
          cy="210"
          r="139"
        />
        <path
          className="dental-scan dental-scan-one"
          d="M91 211a119 119 0 0 1 238 0"
        />
        <path
          className="dental-scan dental-scan-two"
          d="M315 266a119 119 0 0 1-210 0"
        />
        <g className="dental-markers">
          <path d="M210 72v10M210 338v10M72 210h10M338 210h10" />
          <path d="m111 111 8 8m182 182 8 8m0-198-8 8M119 301l-8 8" />
        </g>
        <g className="dental-spark dental-spark-one">
          <path d="M210 36v30M195 51h30" />
        </g>
        <g className="dental-spark dental-spark-two">
          <path d="M348 142v24M336 154h24" />
        </g>
        <g className="dental-spark dental-spark-three">
          <path d="M75 277v20M65 287h20" />
        </g>
        <g className="tooth-float">
          <path
            className="tooth-shape"
            d="M144 112c-27 13-39 45-31 79 7 29 22 47 27 83 6 43 14 75 33 75 17 0 18-62 37-62s20 62 37 62c19 0 27-32 33-75 5-36 20-54 27-83 8-34-4-66-31-79-26-12-45 8-66 8s-40-20-66-8Z"
          />
          <path className="tooth-highlight" d="M151 143c-14 11-18 27-14 46" />
          <path className="tooth-contour" d="M271 145c12 13 15 31 10 51" />
          <path
            className="tooth-root-detail"
            d="M187 285c4-21 11-35 23-35s19 14 23 35"
          />
          <path className="tooth-smile" d="M171 218c22 19 57 19 79 0" />
        </g>
        <circle className="dental-dot dental-dot-one" cx="96" cy="116" r="7" />
        <circle className="dental-dot dental-dot-two" cx="328" cy="292" r="5" />
      </svg>
      <span className="dental-detail dental-detail-one">
        <b>01</b> Precision
      </span>
      <span className="dental-detail dental-detail-two">
        <b>02</b> Comfort
      </span>
      <span className="dental-detail dental-detail-three">
        <b>03</b> Clarity
      </span>
      <span className="dental-detail dental-detail-four">
        <b>04</b> Care
      </span>
    </div>
  );
}
