import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-white text-black hover:bg-white/90 active:scale-[0.98]',
				secondary:
					'bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.1] active:scale-[0.98]',
				ghost: 'text-white hover:bg-white/[0.06]',
				outline:
					'border border-white/15 bg-transparent text-white hover:bg-white/[0.06] active:scale-[0.98]',
				brand:
					'bg-brand-500 text-white hover:bg-brand-600 active:scale-[0.98] shadow-glow-brand',
			},
			size: {
				sm: 'h-9 px-4 text-xs',
				md: 'h-11 px-6 text-sm',
				lg: 'h-12 px-7 text-base',
				xl: 'h-14 px-8 text-base',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		);
	},
);
Button.displayName = 'Button';

export { buttonVariants };
