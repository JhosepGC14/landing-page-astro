import { useStore } from '@nanostores/react';
import { $region } from '../../stores/region';
import { PRICING } from '../../data/pricing';
import { DEFAULT_REGION } from '../../data/regions';

export const TraditionalPrice = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	return (
		<>
			<span className="text-5xl font-light tracking-tight md:text-6xl">
				{pricing.traditional.formatted.split(' ')[0]}
			</span>
			<span className="ml-2 text-base text-white/60">
				{pricing.traditional.formatted.split(' ').slice(1).join(' ')} al año
			</span>
		</>
	);
};

export const OptimalPrice = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	return (
		<>
			<span className="text-5xl font-light tracking-tight md:text-6xl">
				{pricing.yearly.formatted.split(' ')[0]}
			</span>
			<span className="ml-2 text-base text-white/60">
				{pricing.yearly.formatted.split(' ').slice(1).join(' ')} al año
			</span>
		</>
	);
};
