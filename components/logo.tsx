export function Logo({ className }: { className?: string }) {
  return (
    <svg
      aria-labelledby="logoTitle logoDesc"
      className={className}
      role="img"
      viewBox="0 0 543 543"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="logoTitle">My Logo</title>
      <desc id="logoDesc">
        Two red letter C facing each other with a red star in the middle. There
        are rounded blue borders around each shape.
      </desc>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <g
          className="fill-primary-light stroke-blue dark:fill-primary-dark"
          strokeWidth="15"
          transform="translate(-158.000000, -39.000000)"
        >
          <g transform="translate(173.800000, 54.056200)">
            <path d="M269.438207,-12.3685511 L519.5,118.00911 L519.5,393.99089 L269.438207,524.368551 L269.438207,365.001323 L367.88914,313.672487 L367.88914,198.332705 L269.438207,146.998455 L269.438207,-12.3685511 Z" />
            <path d="M259.55464,180.06316 L278.979069,233.972311 L344.619279,233.972311 L291.514817,268.783999 L311.259576,323.614767 L259.55464,289.731109 L207.849704,323.614767 L227.594462,268.783999 L174.490001,233.972311 L240.130211,233.972311 L259.55464,180.06316 Z" />
            <path
              d="M-7.5,-12.3685511 L242.561793,118.00911 L242.561793,393.99089 L-7.5,524.368551 L-7.5,365.001323 L90.9509331,313.672487 L90.9509331,198.332705 L-7.5,146.998455 L-7.5,-12.3685511 Z"
              transform="translate(117.530897, 256.000000) scale(-1, 1) translate(-117.530897, -256.000000)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
