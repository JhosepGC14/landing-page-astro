import type { RegionCode } from './regions';

export interface RegionPricing {
	yearly: {
		amount: number;
		formatted: string;
		taxNote: string;
	};
	daily: {
		amount: number;
		formatted: string;
	};
	traditional: {
		amount: number;
		formatted: string;
	};
}

// TODO: replace placeholder values with real prices once the client provides
// the official MX/CO/PE pricing. INT is the current public price from optimal.lat.
export const PRICING: Record<RegionCode, RegionPricing> = {
	MX: {
		yearly: { amount: 3999, formatted: '$3,999 MXN', taxNote: 'IVA incluido' },
		daily: { amount: 10.95, formatted: '$10.95 MXN' },
		traditional: { amount: 86652, formatted: '$86,652 MXN' },
	},
	CO: {
		// TODO: replace placeholder COP pricing with real numbers from client
		yearly: { amount: 899900, formatted: '$899.900 COP', taxNote: 'IVA incluido' },
		daily: { amount: 2465, formatted: '$2.465 COP' },
		traditional: { amount: 19500000, formatted: '$19.500.000 COP' },
	},
	PE: {
		// TODO: replace placeholder PEN pricing with real numbers from client
		yearly: { amount: 849, formatted: 'S/ 849', taxNote: 'IGV incluido' },
		daily: { amount: 2.33, formatted: 'S/ 2.33' },
		traditional: { amount: 18000, formatted: 'S/ 18,000' },
	},
	INT: {
		yearly: { amount: 228.9, formatted: '$228.90 USD', taxNote: 'incluye impuestos' },
		daily: { amount: 0.65, formatted: '$0.65 USD' },
		traditional: { amount: 5000, formatted: '$5,000 USD' },
	},
};
