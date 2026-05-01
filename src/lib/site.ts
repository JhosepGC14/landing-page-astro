export const SITE = {
	name: 'Optimal',
	tagline: 'La primera plataforma de salud preventiva y de longevidad para América Latina.',
	description:
		'Un chequeo de salud completo con más de 300 pruebas, resultados fáciles de entender y un plan claro para cuidarte mejor.',
	url: 'https://optimal.lat',
	locale: 'es-LA',
	subscriptionsUrl: 'https://suscripciones.optimal.lat',
	whatsappNumber: '+5215555555555',
	contactEmail: 'hola@optimal.com',
	privacyEmail: 'privacy@optimal.com',
	legalEmail: 'legal@optimal.com',
	socials: {
		instagram: 'https://instagram.com/optimal.lat',
		linkedin: 'https://linkedin.com/company/optimal-health-os',
	},
} as const;

export const NAV_LINKS = [
	{ href: '#how-it-works', label: 'Cómo funciona' },
	{ href: '#measure', label: 'Qué medimos' },
	{ href: '#pricing', label: 'Qué incluye' },
	{ href: '/contact', label: 'Contacto' },
] as const;

export const FOOTER_LINKS = {
	main: [
		{ href: '/', label: 'Home' },
		{ href: '/contact', label: 'Contact' },
	],
	others: [
		{ href: '/privacy-policy', label: 'Privacy Policy' },
		{ href: '/terms-conditions', label: 'Terms & Condition' },
	],
} as const;
