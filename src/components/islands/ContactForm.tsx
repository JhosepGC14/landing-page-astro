import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input, Textarea } from '../ui/Input';
import { Label } from '../ui/Label';
import { Button } from '../ui/Button';
import { contactFormSchema, type ContactFormValues } from '../../lib/schemas';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm = (): React.ReactElement => {
	const [status, setStatus] = useState<FormStatus>('idle');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: { firstName: '', lastName: '', email: '', phone: '', message: '' },
	});

	const onSubmit = async (values: ContactFormValues): Promise<void> => {
		setStatus('submitting');

		// TODO: replace this mock with a POST to /api/contact once the Astro
		// server endpoint is wired to Mandrill (Mailchimp Transactional).
		// The endpoint should:
		//   1. Validate body with contactFormSchema (already shared via lib/schemas)
		//   2. Call Mandrill via native fetch:
		//        POST https://mandrillapp.com/api/1.0/messages/send-template.json
		//        body: { key, template_name, template_content, message }
		//   3. Return { ok: true } or { ok: false, error: string }
		// Required env vars: MANDRILL_API_KEY, MANDRILL_TEMPLATE_NAME, MANDRILL_FROM_EMAIL, CONTACT_TO_EMAIL.
		await new Promise((resolve) => setTimeout(resolve, 900));
		console.info('[contact-form mock submit]', values);

		setStatus('success');
		reset();
	};

	const isSubmitting = status === 'submitting';
	const isSuccess = status === 'success';
	const isError = status === 'error';

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="flex flex-col gap-2">
					<Label htmlFor="firstName">First Name</Label>
					<Input
						id="firstName"
						placeholder="First name"
						autoComplete="given-name"
						aria-invalid={Boolean(errors.firstName)}
						{...register('firstName')}
					/>
					{errors.firstName && (
						<p className="text-xs text-red-400">{errors.firstName.message}</p>
					)}
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="lastName">Last Name</Label>
					<Input
						id="lastName"
						placeholder="Last name"
						autoComplete="family-name"
						aria-invalid={Boolean(errors.lastName)}
						{...register('lastName')}
					/>
					{errors.lastName && (
						<p className="text-xs text-red-400">{errors.lastName.message}</p>
					)}
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="Your email"
						autoComplete="email"
						aria-invalid={Boolean(errors.email)}
						{...register('email')}
					/>
					{errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="phone">Phone Number</Label>
					<Input
						id="phone"
						type="tel"
						placeholder="Your phone"
						autoComplete="tel"
						aria-invalid={Boolean(errors.phone)}
						{...register('phone')}
					/>
					{errors.phone && <p className="text-xs text-red-400">{errors.phone.message}</p>}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="message">Message</Label>
				<Textarea
					id="message"
					placeholder="Write your message"
					rows={5}
					aria-invalid={Boolean(errors.message)}
					{...register('message')}
				/>
				{errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
			</div>

			<div className="mt-2 flex flex-col gap-3">
				<Button type="submit" size="lg" disabled={isSubmitting} className="h-14 w-full">
					{isSubmitting ? (
						<>
							<Loader2 className="size-4 animate-spin" /> Enviando...
						</>
					) : (
						'Submit'
					)}
				</Button>

				{isSuccess && (
					<div
						role="status"
						className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
					>
						<CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
						<span>
							Recibimos tu mensaje. Te contactaremos pronto. <em className="text-emerald-200/70">(Mock — Mandrill aún no conectado)</em>
						</span>
					</div>
				)}

				{isError && (
					<div
						role="alert"
						className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100"
					>
						<AlertCircle className="size-4 shrink-0" aria-hidden="true" />
						<span>Ocurrió un error al enviar. Inténtalo de nuevo.</span>
					</div>
				)}

				<p className="text-center text-xs text-white/50">
					By submitting this form you agree to our friendly{' '}
					<a href="/privacy-policy" className="text-brand-300 hover:underline">
						Privacy Policy
					</a>
				</p>
			</div>
		</form>
	);
};
