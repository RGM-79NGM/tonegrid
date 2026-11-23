import { Icon } from '@iconify/react';
import { useState } from 'react';

export const Select = ({ showDropDown, setShowDropDown }) => {
	const currentYear = String(new Date().getFullYear());
	const [selectedDateRange, setSelectedDateRange] = useState(currentYear);

	const dateRange = [
		{
			label: '12M',
			value: '12M',
		},
		{
			label: currentYear,
			value: currentYear,
		},
	];

	return (
		<div className='relative flex w-22 flex-col gap-2 md:w-28'>
			<button
				onClick={() => setShowDropDown((prev) => !prev)}
				type='button'
				className='flex cursor-pointer items-center justify-between gap-2 rounded-lg border-2 border-bg py-1 pr-3 pl-5 sm:py-1 md:py-1.5'
			>
				<div className='flex items-center gap-2 text-xs sm:text-[13px] md:text-sm lg:text-sm'>
					{selectedDateRange}
				</div>

				<Icon icon='mdi:keyboard-arrow-down' className='max-[600px]:size-3' />
			</button>

			{/* Dropdown */}
			<ul
				onMouseDown={(e) => e.preventDefault()}
				className={`${
					showDropDown
						? 'translate-y-0 opacity-100'
						: '-translate-y-2 pointer-events-none bg-transparent opacity-0'
				} absolute top-[105%] left-0 z-10 w-[90%] rounded-md border border-bg2 bg-bg2 transition duration-200`}
			>
				{dateRange.map((range, i) => (
					<li
						key={i}
						onClick={() => {
							if (selectedDateRange !== range.value) {
								setSelectedDateRange(range.value);
							}
							setShowDropDown((prev) => !prev);
						}}
						className='flex cursor-pointer items-center gap-2 rounded-t-md bg-bg2 px-6 py-2 text-sm transition duration-150 hover:bg-bg max-sm:text-[11px]'
					>
						{range?.label || '-'}
					</li>
				))}
			</ul>
		</div>
	);
};
