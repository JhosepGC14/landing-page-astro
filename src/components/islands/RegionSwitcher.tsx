import { useStore } from '@nanostores/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { REGIONS, getRegion, type RegionCode } from '../../data/regions';
import { $region, setRegion } from '../../stores/region';
import { cn } from '../../lib/utils';

export const RegionSwitcher = (): React.ReactElement | null => {
	const region = useStore($region);
	const [open, setOpen] = useState(false);

	if (!region) return null;

	const current = getRegion(region);

	const handleChange = (code: RegionCode): void => {
		setRegion(code);
		setOpen(false);
	};

	return (
		<div className="relative">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-haspopup="listbox"
				aria-expanded={open}
				className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
			>
				<span aria-hidden="true">{current.flag}</span>
				<span>{current.code}</span>
				<ChevronDown className={cn('size-3 transition-transform', open && 'rotate-180')} />
			</button>

			{open && (
				<>
					<div
						className="fixed inset-0 z-30"
						onClick={() => setOpen(false)}
						aria-hidden="true"
					/>
					<ul
						role="listbox"
						className="absolute right-0 top-full z-40 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-1 shadow-xl shadow-black/50"
					>
						{REGIONS.map((r) => (
							<li key={r.code} role="option" aria-selected={r.code === region}>
								<button
									type="button"
									onClick={() => handleChange(r.code)}
									className={cn(
										'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/80 transition-colors hover:bg-white/[0.06]',
										r.code === region && 'bg-white/[0.04] text-white',
									)}
								>
									<span aria-hidden="true">{r.flag}</span>
									<span>{r.name}</span>
								</button>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};
