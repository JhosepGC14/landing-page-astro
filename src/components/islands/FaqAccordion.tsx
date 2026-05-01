import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/Accordion';
import type { FaqItem } from '../../data/faq';

interface FaqAccordionProps {
	items: readonly FaqItem[];
}

export const FaqAccordion = ({ items }: FaqAccordionProps): React.ReactElement => (
	<Accordion type="single" collapsible className="flex flex-col gap-3">
		{items.map((item) => (
			<AccordionItem key={item.id} value={item.id}>
				<AccordionTrigger>{item.question}</AccordionTrigger>
				<AccordionContent>{item.answer}</AccordionContent>
			</AccordionItem>
		))}
	</Accordion>
);
