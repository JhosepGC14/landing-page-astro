import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isReducedMotion = (): boolean =>
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const SmoothScroll = (): null => {
	useEffect(() => {
		if (isReducedMotion()) return;

		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			wheelMultiplier: 1,
			touchMultiplier: 1.4,
			smoothWheel: true,
		});

		lenis.on('scroll', ScrollTrigger.update);

		const tickerCallback = (time: number): void => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(tickerCallback);
		gsap.ticker.lagSmoothing(0);

		const handleAnchorClick = (event: MouseEvent): void => {
			const target = event.target as HTMLElement;
			const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
			if (!anchor) return;

			const hash = anchor.getAttribute('href');
			if (!hash || hash === '#') return;

			const element = document.querySelector(hash);
			if (!element) return;

			event.preventDefault();
			lenis.scrollTo(element as HTMLElement, { offset: -80, duration: 1.2 });
		};
		document.addEventListener('click', handleAnchorClick);

		return () => {
			document.removeEventListener('click', handleAnchorClick);
			gsap.ticker.remove(tickerCallback);
			lenis.destroy();
		};
	}, []);

	return null;
};
