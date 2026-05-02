interface LogoProps {
	className?: string;
}

export const Logo = ({ className = '' }: LogoProps): React.ReactElement => {
	return (
		<a href="/" aria-label="Optimal — Inicio" className={`inline-flex items-center ${className}`}>
			{/* TODO: replace with the official Optimal SVG/wordmark file when provided by the brand */}
			<span className="font-display text-xl font-medium tracking-tight text-white md:text-2xl">
				Optimal
			</span>
		</a>
	);
};