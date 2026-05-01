import { useRef, type ElementType, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface StaggerChildrenProps {
	children: ReactNode;
	as?: ElementType;
	className?: string;
	stagger?: number;
	delay?: number;
	y?: number;
	selector?: string;
}

export const StaggerChildren = ({
	children,
	as: Component = 'div',
	className,
	stagger = 0.1,
	delay = 0,
	y = 24,
	selector = '> *',
}: StaggerChildrenProps): React.ReactElement => {
	const ref = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!ref.current) return;

			gsap.fromTo(
				`${selector}`,
				{ opacity: 0, y },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					delay,
					ease: 'power3.out',
					stagger,
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 80%',
						toggleActions: 'play none none none',
					},
				},
			);
		},
		{ scope: ref },
	);

	return (
		<Component ref={ref} className={className}>
			{children}
		</Component>
	);
};
