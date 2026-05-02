import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../lib/site';
import { Logo } from '../Logo';

export const MobileMenuButton = (): React.ReactElement => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	const handleLinkClick = (): void => {
		setIsOpen(false);
	};

	return (
		<>
			<Button
				variant="ghost"
				size="sm"
				className="size-10 p-0 lg:hidden"
				onClick={() => setIsOpen(true)}
				aria-label="Abrir menú"
			>
				<Menu className="size-5" />
			</Button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-xl lg:hidden">
					<div className="flex items-center justify-between px-6 pt-6">
						<Logo />
						<Button
							variant="ghost"
							size="sm"
							className="size-10 p-0"
							onClick={() => setIsOpen(false)}
							aria-label="Cerrar menú"
						>
							<X className="size-6" />
						</Button>
					</div>
					<nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-2xl font-medium tracking-tight text-white transition-colors hover:text-white/80"
								onClick={handleLinkClick}
							>
								{link.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</>
	);
};