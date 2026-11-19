import { Icon } from '@iconify/react';

export const Footer = () => {
	return (
		<div
			className='flex w-full flex-col items-center justify-center gap-10 pt-10
				pb-5.5'
		>
			<div className='flex w-[18%] justify-between'>
				<div className='flex items-center gap-1'>
					<a href='/contact' className='hover:underline'>
						Contact
					</a>
					<Icon icon='bx:link-external' className='size-3.75 text-white' />
				</div>

				<div className='flex items-center gap-1'>
					<a href='/about' className='hover:underline'>
						About
					</a>
					<Icon icon='bx:link-external' className='size-3.75 text-white' />
				</div>
			</div>
			<span className='text-xs text-white/80'>
				© 2026-2026 by MAPLe.com, Inc.
			</span>
		</div>
	);
};
