import { useStore } from '@nanostores/react';
import { $region } from '../../stores/region';
import { PRICING } from '../../data/pricing';
import { DEFAULT_REGION } from '../../data/regions';

export const PricingHeadline = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	return (
		<>
			Tu salud completa, por <span className="text-white">{pricing.daily.formatted} al día</span>
		</>
	);
};

export const PricingSubtitle = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	return (
		<>
			Equivale a {pricing.yearly.formatted} al año. Sin seguros. Sin costos ocultos.
		</>
	);
};

export const PricingDailyAmount = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	const [amount, ...rest] = pricing.daily.formatted.split(' ');
	return (
		<>
			<span className="text-5xl font-light text-white md:text-6xl">{amount}</span>
			<span className="ml-2 text-base text-white/60">{rest.join(' ')} por día</span>
		</>
	);
};

export const PricingYearlyDetail = (): React.ReactElement => {
	const region = useStore($region) ?? DEFAULT_REGION;
	const pricing = PRICING[region];
	return (
		<>
			En un pago anual de {pricing.yearly.formatted}{' '}
			{pricing.yearly.taxNote ? `(${pricing.yearly.taxNote})` : null}
		</>
	);
};
