import { persistentAtom } from '@nanostores/persistent';
import type { RegionCode } from '../data/regions';

const STORAGE_KEY = 'optimal-region';

export const $region = persistentAtom<RegionCode | null>(STORAGE_KEY, null, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const setRegion = (code: RegionCode): void => {
	$region.set(code);
};

export const clearRegion = (): void => {
	$region.set(null);
};
