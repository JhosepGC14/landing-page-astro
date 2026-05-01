import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn(
			'overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors data-[state=open]:bg-white/[0.04]',
			className,
		)}
		{...props}
	/>
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-white transition-all hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30',
				className,
			)}
			{...props}
		>
			{children}
			<Plus
				className="size-5 shrink-0 text-white/50 transition-transform duration-300 group-data-[state=open]:rotate-45"
				aria-hidden="true"
			/>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm text-white/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}
	>
		<div className={cn('px-6 pb-5 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';
