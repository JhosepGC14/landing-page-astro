export interface Doctor {
	name: string;
	credentials: string;
	institution: string;
	imageUrl?: string;
}

// TODO: replace imageUrl with /images/doctors/<slug>.jpg once headshots are delivered.
// Initials are used as a graceful fallback when imageUrl is not provided.
export const DOCTORS: readonly Doctor[] = [
	{
		name: 'Andrés Vásquez, M.D.',
		credentials: 'Optimal Chief Medical Officer & Founder',
		institution: 'Yale MD',
	},
	{
		name: 'Mohammed Mostajo, Ph.D.',
		credentials: 'Molecular and Cellular Biology',
		institution: 'Harvard University',
	},
	{
		name: 'Diana Palacio Barrera',
		credentials: 'Functional Nutrition & Metabolic Health Specialist',
		institution: '',
	},
	{
		name: 'Melanie Cornejo',
		credentials: 'PhD in Immunology',
		institution: 'Harvard University and MIT',
	},
	{
		name: 'Sven Boes',
		credentials: 'Executive leader',
		institution: 'Auna, TecSalud and Hospital ABC',
	},
	{
		name: 'Luis D. Vilchis, MD',
		credentials: 'Founding Member',
		institution: 'International Board of Functional Medicine (IBFMC)',
	},
];

export interface University {
	name: string;
}

export const UNIVERSITIES: readonly University[] = [
	{ name: 'Harvard' },
	{ name: 'Yale' },
	{ name: 'MIT' },
];

export interface Lab {
	name: string;
}

// TODO: replace with proper SVG logos in /public/images/labs/<slug>.svg
export const LABS: readonly Lab[] = [
	{ name: 'Jenner' },
	{ name: 'POLAB' },
	{ name: 'SWISS LAB' },
	{ name: 'EXAKTA' },
	{ name: 'Aries' },
	{ name: 'Quest Diagnostics' },
	{ name: 'auna' },
];
