import * as React from 'react';
import { cn } from '../../lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', ...props }, ref) => (
		<input
			ref={ref}
			type={type}
			className={cn(
				'flex h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white transition-colors',
				'placeholder:text-white/30',
				'focus:border-white/30 focus:bg-white/[0.06] focus:outline-none',
				'disabled:cursor-not-allowed disabled:opacity-50',
				'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white',
				className,
			)}
			{...props}
		/>
	),
);
Input.displayName = 'Input';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => (
		<textarea
			ref={ref}
			className={cn(
				'flex min-h-32 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition-colors',
				'placeholder:text-white/30',
				'focus:border-white/30 focus:bg-white/[0.06] focus:outline-none',
				'disabled:cursor-not-allowed disabled:opacity-50',
				'resize-y',
				className,
			)}
			{...props}
		/>
	),
);
Textarea.displayName = 'Textarea';
