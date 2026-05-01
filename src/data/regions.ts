export type RegionCode = 'MX' | 'CO' | 'PE' | 'INT';

export interface Region {
	code: RegionCode;
	name: string;
	currency: string;
	locale: string;
	flag: string;
}

export const REGIONS: readonly Region[] = [
	{ code: 'MX', name: 'México', currency: 'MXN', locale: 'es-MX', flag: '🇲🇽' },
	{ code: 'PE', name: 'Perú', currency: 'PEN', locale: 'es-PE', flag: '🇵🇪' },
	{ code: 'CO', name: 'Colombia', currency: 'COP', locale: 'es-CO', flag: '🇨🇴' },
	{ code: 'INT', name: 'Internacional', currency: 'USD', locale: 'en-US', flag: '🌎' },
] as const;

export const DEFAULT_REGION: RegionCode = 'INT';

export const getRegion = (code: RegionCode): Region => {
	const region = REGIONS.find((r) => r.code === code);
	if (!region) {
		throw new Error(`Unknown region code: ${code}`);
	}
	return region;
};
