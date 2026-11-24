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

/** Crisp inline SVG brand badges for each financial and ERP platform. */
export function ToolLogoMark({ id }: ToolLogoMarkProps) {
  switch (id) {
    case 'sap':
      return (
        <svg viewBox="0 0 44 28" className="h-9 w-12 shrink-0" aria-hidden="true">
          <path d="M4 2H40A2 2 0 0 1 41.9 4.7L34.5 24.7A2 2 0 0 1 32.6 26H4A2 2 0 0 1 2 24V4A2 2 0 0 1 4 2Z" fill="#0070F2" />
          <text
            x="19"
            y="19"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="700"
            fontFamily="Work Sans, system-ui, sans-serif"
            letterSpacing="0.5"
          >
            SAP
          </text>
        </svg>
      );
    case 'zoho':
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="3" y="10" width="11" height="11" rx="2.5" transform="rotate(-8 8 15)" fill="#E42527" />
          <rect x="14" y="6" width="11" height="11" rx="2.5" transform="rotate(6 19 11)" fill="#089949" />
          <rect x="25" y="10" width="11" height="11" rx="2.5" transform="rotate(-6 30 15)" fill="#226DB4" />
          <rect x="14" y="21" width="11" height="11" rx="2.5" transform="rotate(4 19 26)" fill="#F5B700" />
        </svg>
      );
    case 'xero':
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="#13B5EA" />
          <path
            d="M14 14L26 26M26 14L14 26"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'quickbooks':
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
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
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="2" y="2" width="36" height="36" rx="10" fill="#1E3A8A" />
          <path d="M10 12H30V16.5H22.2V29H17.8V16.5H10V12Z" fill="#FFFFFF" />
          <circle cx="29" cy="27" r="3" fill="#F59E0B" />
        </svg>
      );
    case 'ginesys':
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="2" y="2" width="36" height="36" rx="10" fill="#1D4ED8" />
          <path
            d="M25.5 14.5A7.5 7.5 0 1 0 27 21H20.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27.5" cy="14" r="2.6" fill="#F97316" />
        </svg>
      );
    case 'gofrugal':
      return (
        <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
          <rect x="2" y="2" width="36" height="36" rx="10" fill="#15803D" />
          <path
            d="M12 24C12 16.8 17.5 12 25 12C25 19.5 20.5 25 13 25"
            fill="none"
            stroke="#B7E52C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="25.5" cy="25.5" r="3" fill="#FFFFFF" />
        </svg>
      );
  }
}
