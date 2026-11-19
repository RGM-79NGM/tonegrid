import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
// import logo from '../../public/logo-3.svg';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<div
			className='grid grid-cols-[0.2fr_2fr_1fr] items-center justify-between
				gap-5 bg-[#2C2D31] py-1.25 pl-[7.2%]'
		>
			<div className='flex w-full items-center justify-center p-2'>
				<div className='justify-self-start rounded-md bg-rose-600 px-3 py-0.5'>
					<button
						onClick={() => navigate('/')}
						className='font-anton cursor-pointer font-extrabold
							tracking-[0.04em] text-[#fafafaff] lg:text-[19px]'
					>
						MAPLe
					</button>
				</div>
			</div>

			{/* Search bar */}
			<div
				className='flex h-8 w-full items-center gap-2 rounded-md bg-white px-2
					text-zinc-800'
			>
				<button
					className='h-full justify-self-start border-r border-black/50 pr-2
						pl-1.25 text-sm font-medium'
				>
					All
				</button>
				<input
					type='text'
					placeholder='Search habits'
					className='w-full border-0 px-2 py-1.25 text-sm outline-none
						focus:ring-0'
				/>
				<button className='px-2'>
					<Icon
						icon='akar-icons:search'
						className='size-4 text-zinc-500'
					></Icon>
				</button>
			</div>

			{/* Right icons */}
			<div className='flex items-center gap-2'>
				<button
					title='Create new tracker'
					onClick={() => {
						navigate('/create-habit');
					}}
					className='flex h-10 cursor-pointer items-center justify-center
						gap-1.25 rounded-full px-3 text-sm font-medium transition
						duration-250 hover:bg-white/10'
				>
					<Icon icon='boxicons:grid-plus-filled' className='size-5 lg:size-5' />
				</button>

				<button
					onClick={() => navigate('/')}
					className='flex h-10 cursor-pointer items-center justify-center
						gap-1.25 rounded-full px-3 uppercase transition duration-250
						hover:bg-white/10'
				>
					<span className='text-[13px] font-semibold'>Habitlist</span>
					<span
						className='rounded-full bg-rose-600 px-2 py-px text-xs font-bold'
					>
						04
					</span>
				</button>

				<button
					className='flex h-10 cursor-pointer items-center justify-center
						gap-1.25 rounded-full px-3 text-sm font-medium transition
						duration-250 hover:bg-white/10'
				>
					<Icon
						icon='boxicons:user-circle-filled'
						onClick={() => navigate('/settings')}
						className='size-5 cursor-pointer transition duration-100 sm:size-4.5
							lg:size-6 xl:size-6.5'
					/>
					<span>yvy</span>
					<div>
						<Icon
							icon='akar-icons:triangle-down-fill'
							onClick={() => navigate('/settings')}
							className='hover:text-highlight cursor-pointer transition
								duration-100 sm:size-4.5 md:size-2 lg:size-2 xl:size-3'
						/>
					</div>
				</button>
			</div>
		</div>
	);
};
