import { useState } from 'react';
import { Icon } from '@iconify/react';

export const Select = ({ showDropDown, setShowDropDown }) => {
	const currentYear = String(new Date().getFullYear());
	const [selectedDateRange, setSelectedDateRange] = useState(currentYear);
	console.log('🐟 - Select - currentYear:', currentYear);

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
		<div className='relative flex w-24 flex-col gap-2 lg:w-32'>
			<button
				onClick={() => setShowDropDown((prev) => !prev)}
				className='border-bg flex cursor-pointer items-center justify-between
					gap-2 rounded-lg border-2 py-1 pr-3 pl-5 sm:py-1 md:py-1.5'
			>
				<div
					className='flex items-center gap-2 text-xs sm:text-[13px] md:text-sm
						lg:text-sm'
				>
					{selectedDateRange}
				</div>

				<Icon icon='mdi:keyboard-arrow-down' />
			</button>

			{/* Dropdown */}
			<ul
				onMouseDown={(e) => e.preventDefault()}
				className={`${
					showDropDown
						? 'translate-y-0 opacity-100'
						: 'pointer-events-none -translate-y-2 bg-transparent opacity-0'
					} bg-bg2 border-bg2 absolute top-[105%] left-0 z-10 w-[90%] rounded-md
					border transition duration-200`}
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
						className='bg-bg2 hover:bg-bg flex cursor-pointer items-center gap-2
							rounded-t-md px-6 py-2 text-sm transition duration-150
							max-sm:text-[11px]'
					>
						{range?.label || '-'}
					</li>
				))}
			</ul>
		</div>
	);
};
