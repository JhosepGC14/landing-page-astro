import { useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface FadeInProps {
	children: ReactNode;
	as?: ElementType;
	className?: string;
	style?: CSSProperties;
	delay?: number;
	duration?: number;
	y?: number;
	once?: boolean;
}

export const FadeIn = ({
	children,
	as: Component = 'div',
	className,
	style,
	delay = 0,
	duration = 0.9,
	y = 24,
	once = true,
}: FadeInProps): React.ReactElement => {
	const ref = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!ref.current) return;

			gsap.fromTo(
				ref.current,
				{ opacity: 0, y },
				{
					opacity: 1,
					y: 0,
					duration,
					delay,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 85%',
						toggleActions: once ? 'play none none none' : 'play reverse play reverse',
					},
				},
			);
		},
		{ scope: ref },
	);

	return (
		<Component ref={ref} className={className} style={style}>
			{children}
		</Component>
	);
};
