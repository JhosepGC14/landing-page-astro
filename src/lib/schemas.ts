import { z } from 'zod';

export const contactFormSchema = z.object({
	firstName: z
		.string({ message: 'Tu nombre es requerido.' })
		.trim()
		.min(2, 'Tu nombre debe tener al menos 2 caracteres.')
		.max(60, 'Tu nombre es demasiado largo.'),
	lastName: z
		.string({ message: 'Tu apellido es requerido.' })
		.trim()
		.min(2, 'Tu apellido debe tener al menos 2 caracteres.')
		.max(60, 'Tu apellido es demasiado largo.'),
	email: z
		.string({ message: 'Tu correo es requerido.' })
		.trim()
		.email('Ingresa un correo válido.'),
	phone: z
		.string()
		.trim()
		.min(7, 'Ingresa un teléfono válido.')
		.max(20, 'Ingresa un teléfono válido.')
		.optional()
		.or(z.literal('')),
	message: z
		.string({ message: 'Cuéntanos cómo podemos ayudarte.' })
		.trim()
		.min(10, 'Tu mensaje debe tener al menos 10 caracteres.')
		.max(2000, 'Tu mensaje es demasiado largo.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
