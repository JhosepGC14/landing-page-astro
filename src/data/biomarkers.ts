export interface BiomarkerCategory {
	slug: string;
	title: string;
	description: string;
	count: number;
	highlights: string[];
	gradient: string;
}

// TODO: replace gradient placeholders with real category background images
// once art direction is provided. Each card should host an image at:
// /images/biomarkers/<slug>.jpg
export const BIOMARKER_CATEGORIES: readonly BiomarkerCategory[] = [
	{
		slug: 'sangre-oxigenacion',
		title: 'Sangre y oxigenación',
		description: 'Revisa la calidad de tu sangre y su capacidad para llevar oxígeno a todo tu cuerpo.',
		count: 11,
		highlights: ['Hemoglobina', 'Eritrocitos', 'Hematocrito', 'Plaquetas'],
		gradient: 'from-rose-900/40 via-rose-700/20 to-transparent',
	},
	{
		slug: 'energia-celular',
		title: 'Energía Celular',
		description: 'Mide tu capacidad celular para producir energía, resistir el estrés y evitar la fatiga.',
		count: 4,
		highlights: ['Hemoglobina', 'Vitamina D', 'Vitamina B12'],
		gradient: 'from-amber-900/40 via-orange-700/20 to-transparent',
	},
	{
		slug: 'composicion-corporal',
		title: 'Composición Corporal',
		description: 'Analiza tu cantidad y distribución de grasa corporal y su impacto en tu salud metabólica.',
		count: 1,
		highlights: ['IMC'],
		gradient: 'from-violet-900/40 via-violet-700/20 to-transparent',
	},
	{
		slug: 'estres-desgaste',
		title: 'Estrés y Desgaste',
		description: 'Mide cuánto desgaste acumulado tiene tu cuerpo por estrés físico y emocional sostenido.',
		count: 3,
		highlights: ['Cortisol matutino', 'Índice alostático', 'Ratio energía-estrés'],
		gradient: 'from-slate-700/40 via-slate-500/20 to-transparent',
	},
	{
		slug: 'salud-cardiovascular',
		title: 'Salud Cardiovascular',
		description: 'Analiza el estado de tu corazón, vasos sanguíneos y tu riesgo de problemas cardíacos a futuro.',
		count: 16,
		highlights: ['Colesterol HDL', 'Triglicéridos', 'Colesterol LDL', 'Apolipoproteína B'],
		gradient: 'from-red-900/40 via-red-700/20 to-transparent',
	},
	{
		slug: 'salud-metabolica',
		title: 'Salud Metabólica',
		description: 'Evalúa cómo tu cuerpo procesa nutrientes y mantiene niveles de glucosa estables.',
		count: 9,
		highlights: ['Glucosa', 'HbA1c', 'Insulina', 'HOMA-IR'],
		gradient: 'from-emerald-900/40 via-emerald-700/20 to-transparent',
	},
	{
		slug: 'salud-hormonal',
		title: 'Salud Hormonal',
		description: 'Mide el balance hormonal que regula tu energía, ánimo, peso y vitalidad sexual.',
		count: 7,
		highlights: ['TSH', 'T4 libre', 'Testosterona', 'Estradiol'],
		gradient: 'from-fuchsia-900/40 via-pink-700/20 to-transparent',
	},
	{
		slug: 'salud-hepatica',
		title: 'Salud Hepática',
		description: 'Evalúa la función de tu hígado, clave para detoxificación y metabolismo.',
		count: 6,
		highlights: ['ALT', 'AST', 'GGT', 'Bilirrubina'],
		gradient: 'from-yellow-900/40 via-yellow-700/20 to-transparent',
	},
];
