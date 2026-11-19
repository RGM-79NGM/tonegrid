export const Footer = () => {
	return (
		<div
			className='flex w-full flex-col items-center justify-center gap-10 pt-10
				pb-5.5'
		>
			<div className='flex gap-15'>
				<a href='/contact' className='hover:underline'>
					Contact
				</a>

				<a href='/' target='_blank' className='hover:underline'>
					Home
				</a>

				<a href='/about' className='hover:underline'>
					About
				</a>
			</div>
			<span className='text-xs text-white/80'>
				© 2026-2026 by MAPLe.com, Inc.
			</span>
		</div>
	);
};
