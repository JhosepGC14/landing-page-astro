export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

// TODO: align answers with the official copy when the marketing team confirms it.
// Current copy is a faithful approximation of the messaging on optimal.lat.
export const FAQ_ITEMS: readonly FaqItem[] = [
	{
		id: 'que-es',
		question: '¿Qué es Optimal?',
		answer:
			'Optimal es la primera plataforma de salud preventiva y de longevidad para América Latina. Combinamos chequeos de sangre completos con análisis médico y un plan personalizado para ayudarte a entender qué está pasando en tu cuerpo y qué hacer al respecto.',
	},
	{
		id: 'que-incluye-membresia',
		question: '¿Qué incluye mi membresía en Optimal?',
		answer:
			'Tu membresía anual incluye dos chequeos completos al año (más de 160 pruebas de laboratorio), una cita médica para explicarte los resultados, acceso a tu plan personalizado en HealthOS y a Optimal AI para resolver tus dudas en cualquier momento.',
	},
	{
		id: 'que-pruebas',
		question: '¿Qué pruebas se incluyen?',
		answer:
			'Cubrimos las dimensiones clave de tu salud: sangre y oxigenación, energía celular, composición corporal, estrés y desgaste, salud cardiovascular, metabólica, hormonal y hepática. En total más de 160 biomarcadores procesados por laboratorios líderes en la región.',
	},
	{
		id: 'sirve-si-me-siento-bien',
		question: '¿Optimal sirve si me siento bien?',
		answer:
			'Sí. Optimal está diseñado para detectar desequilibrios antes de que se conviertan en síntomas. La mayoría de personas que se sienten bien descubren áreas a optimizar tras su primer chequeo.',
	},
	{
		id: 'proceso-al-unirme',
		question: '¿Cómo es el proceso al unirme?',
		answer:
			'Te suscribes en línea, agendas tu cita en uno de nuestros laboratorios aliados, recibes tus resultados en HealthOS en pocos días y agendamos tu cita médica para revisarlos contigo.',
	},
	{
		id: 'seguro-medico',
		question: '¿Necesito seguro médico?',
		answer:
			'No. Optimal no requiere seguro médico ni reemplaza al tuyo. Es un servicio de salud preventiva pensado para que cualquier persona pueda acceder a un chequeo de calidad.',
	},
];
