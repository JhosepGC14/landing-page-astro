import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/Dialog';
import { REGIONS, type RegionCode } from '../../data/regions';
import { $region, setRegion } from '../../stores/region';
import { cn } from '../../lib/utils';

export const RegionGate = (): React.ReactElement | null => {
	const region = useStore($region);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) return null;

	const open = region === null;

	const handleSelect = (code: RegionCode): void => {
		setRegion(code);
	};

	return (
		<Dialog open={open}>
			<DialogContent
				showClose={false}
				onPointerDownOutside={(event) => event.preventDefault()}
				onEscapeKeyDown={(event) => event.preventDefault()}
				onInteractOutside={(event) => event.preventDefault()}
				className="max-w-xl border-white/10 bg-[#0a0a0a]/95"
			>
				<DialogHeader>
					<DialogTitle className="text-2xl md:text-3xl">¿ Dónde estás?</DialogTitle>
					<p className="text-sm text-white/60">Selecciona tu país para continuar</p>
				</DialogHeader>

				<div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
					{REGIONS.map((r) => (
						<button
							key={r.code}
							type="button"
							onClick={() => handleSelect(r.code)}
							className={cn(
								'group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 transition-all',
								'hover:border-white/30 hover:bg-white/[0.06]',
								'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
							)}
							aria-label={`Seleccionar ${r.name}`}
						>
							<span className="text-2xl" aria-hidden="true">
								{r.flag}
							</span>
							<span className="text-sm font-medium text-white">{r.name}</span>
						</button>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};
