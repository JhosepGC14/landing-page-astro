import { useStore } from '@nanostores/react';
import { $region } from '../../stores/region';
import { PRICING } from '../../data/pricing';
import { DEFAULT_REGION } from '../../data/regions';

export const HeroPrice = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];

	return (
		<>
			Por sólo <span className="font-medium text-white">{pricing.yearly.formatted}</span>
			{' al año'}
			{pricing.yearly.taxNote ? ` (${pricing.yearly.taxNote})` : null}
		</>
	);
};

export const HeroDailyStat = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	return (
		<>
			<p className="font-medium text-white">{pricing.daily.formatted} por día</p>
			<p className="text-sm text-white/50">{pricing.yearly.formatted} al año</p>
		</>
	);
};
