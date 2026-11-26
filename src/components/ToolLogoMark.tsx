export type ToolBrandId =
  | 'sap'
  | 'zoho'
  | 'xero'
  | 'quickbooks'
  | 'tally'
  | 'ginesys'
  | 'gofrugal';

interface ToolLogoMarkProps {
  id: ToolBrandId;
}

/** Crisp inline SVG brand logos for each financial and ERP platform. */
export function ToolLogoMark({ id }: ToolLogoMarkProps) {
  switch (id) {
    case 'sap':
      return (
        <svg viewBox="0 0 68 34" className="h-7 w-auto shrink-0 sm:h-9" aria-hidden="true">
          <path
            d="M4 2H64A2 2 0 0 1 65.8 4.8L52.6 31.2A2 2 0 0 1 50.8 32H4A2 2 0 0 1 2 30V4A2 2 0 0 1 4 2Z"
            fill="#0070F2"
          />
          <text
            x="29"
            y="23"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="16.5"
            fontWeight="700"
            fontFamily="Work Sans, system-ui, sans-serif"
            letterSpacing="0.8"
          >
            SAP
          </text>
        </svg>
      );
    case 'zoho':
      return (
        <svg viewBox="0 0 88 32" className="h-6 w-auto shrink-0 sm:h-8" aria-hidden="true">
          <g fill="none" strokeWidth="2.6" strokeLinejoin="round">
            <rect
              x="4"
              y="7"
              width="17"
              height="17"
              rx="3.5"
              transform="rotate(-11 12.5 15.5)"
              stroke="#E42527"
            />
            <rect
              x="23.5"
              y="5.5"
              width="17"
              height="17"
              rx="3.5"
              transform="rotate(9 32 14)"
              stroke="#089949"
            />
            <rect
              x="44"
              y="7.5"
              width="17"
              height="17"
              rx="3.5"
              transform="rotate(-9 52.5 16)"
              stroke="#226DB4"
            />
            <rect
              x="64.5"
              y="6.5"
              width="17"
              height="17"
              rx="3.5"
              transform="rotate(8 73 15)"
              stroke="#F5B700"
            />
          </g>
        </svg>
      );
    case 'xero':
      return (
        <svg viewBox="0 0 108 34" className="h-5 w-auto shrink-0 sm:h-7" aria-hidden="true">
          <g fill="none" stroke="#13B5EA" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round">
            {/* x */}
            <path d="M9 10L23 24M23 10L9 24" />
            {/* e */}
            <path d="M32 17H45C45 12.5 42 9.5 37.8 9.5C33.4 9.5 30 12.8 30 17.2C30 21.8 33.4 25 38 25C40.8 25 42.9 23.9 44.2 22.3" />
            {/* r */}
            <path d="M54 24.5V15.5C54 11.8 56.5 9.6 60.5 9.6C61.5 9.6 62.4 9.8 63 10" />
            {/* o with bullseye dot */}
            <circle cx="77.5" cy="17.2" r="7.6" />
          </g>
          <circle cx="77.5" cy="17.2" r="2.6" fill="#13B5EA" />
        </svg>
      );
    case 'quickbooks':
      return (
        <svg viewBox="0 0 40 40" className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="#2CA01C" />
          <text
            x="20"
            y="24.5"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="15"
            fontWeight="700"
            fontFamily="Work Sans, system-ui, sans-serif"
          >
            qb
          </text>
        </svg>
      );
    case 'tally':
      return (
        <svg viewBox="0 0 40 40" className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" aria-hidden="true">
          <rect x="2" y="2" width="36" height="36" rx="10" fill="#1E3A8A" />
          <path d="M10 12H30V16.5H22.2V29H17.8V16.5H10V12Z" fill="#FFFFFF" />
          <circle cx="29" cy="27" r="3" fill="#F59E0B" />
        </svg>
      );
    case 'ginesys':
      return (
        <svg viewBox="0 0 64 36" className="h-6 w-auto shrink-0 sm:h-8" aria-hidden="true">
          {/* Left lower dark-green curve */}
          <path
            d="M27.5 29.5A12.5 12.5 0 0 1 8.5 14"
            fill="none"
            stroke="#364A3E"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Continuous green figure-8 loop into right G crossbar */}
          <path
            d="M8.5 14A12.5 12.5 0 0 1 29.5 12L35 23.8A12.5 12.5 0 0 0 56 18H45.5"
            fill="none"
            stroke="#63B32E"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top-right dark-green cap arc */}
          <path
            d="M35.5 11.2A12.5 12.5 0 0 1 54 11.2"
            fill="none"
            stroke="#364A3E"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'gofrugal':
      return (
        <svg viewBox="0 0 40 40" className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" aria-hidden="true">
          {/* Navy blue open G ring */}
          <path
            d="M32 10.5A14.5 14.5 0 1 0 32 29.5"
            fill="none"
            stroke="#24296B"
            strokeWidth="5.8"
            strokeLinecap="butt"
          />
          {/* Bold red horizontal bar */}
          <rect x="19" y="17.2" width="16.5" height="5.4" fill="#E1251B" />
        </svg>
      );
  }
}
