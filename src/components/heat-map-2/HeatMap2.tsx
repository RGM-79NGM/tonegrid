import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { returnColorIntensity, returnColorTheme } from '../../constants/themes';
import { Icon } from '@iconify/react';
import { Select } from '../heat-map/Select';
import { ToolTip } from '../ToolTip';

export const HeatMap2 = ({ habit }) => {
	console.log('Habit that the heatmap got:', habit);
	const [currentHabit, setCurrentHabit] = useState(habit);
	const [changed, setChanged] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [expandedTracker, setExpandedTracker] = useState(null);
	const theme = returnColorTheme(habit.colorTheme);
	// console.log('🐟 - HeatMap2 - theme:', theme);
	console.log('🐟 - HeatMap2 - habit:', habit);

	useEffect(() => {}, [changed]);

	return (
		<div
			onBlur={() => setShowDropdown(false)}
			className='flex flex-1 justify-center'
		>
			<div
				className='bg-bg2 w-[clamp(200px, 90vw,1200px)] flex flex-col
					items-center justify-center gap-2 rounded-md p-3'
			>
				<header
					className='flex w-full items-center justify-between pr-1 text-[18px]
						font-medium text-gray-200'
				>
					<div className='flex items-center gap-5'>
						<Select
							showDropDown={showDropdown}
							setShowDropDown={setShowDropdown}
						/>
						<div className='flex items-center gap-2'>
							<span className='text-base1 xl:text-md text-sm lg:text-base'>
								{habit?.name || '-'}
							</span>
							<span className='text-base2 text-xs lg:text-sm'>{`${habit?.entries?.length || '0'} days`}</span>
						</div>
					</div>
					<div className='flex h-full items-center gap-2 p-0.5'>
						<div
							className='text-base2 flex items-center gap-2 text-[13px]
								sm:text-[13px] xl:text-[16px]'
						>
							less
							<div
								className='grid grid-flow-col
									grid-cols-[repeat(5,var(--cell-size))]
									grid-rows-[repeat(1,var(--cell-size))] justify-center p-1
									[--cell-size:12px] min-[450px]:gap-1
									min-[450px]:[--cell-size:6px] sm:gap-px sm:[--cell-size:9px]
									md:gap-0.5 md:[--cell-size:11px] lg:gap-0.75
									lg:[--cell-size:15px] xl:[--cell-size:16px]'
							>
								{Array.from({ length: 5 }).map((item, i) => (
									<div
										key={i}
										style={{
											backgroundColor: returnColorIntensity(theme, i),
										}}
										className='flex cursor-pointer items-center justify-center
											rounded-sm text-xs text-white min-[450px]:rounded-[1.7px]
											xl:rounded-[3.2px]'
									></div>
								))}
							</div>
							more
						</div>
						<div className='cursor-pointer rounded-full p-px hover:bg-white/10'>
							<Icon
								onClick={() =>
									setExpandedTracker(() => {
										if (expandedTracker === habit.id) {
											setExpandedTracker(null);
										} else {
											setExpandedTracker(habit.id);
										}
									})
								}
								icon='mdi:keyboard-arrow-down'
								className='text-base1 text-lg'
							/>
						</div>
					</div>
				</header>

				<main className='grid grid-cols-[auto_1fr] gap-1'>
					<div
						className='text-base2 pointer-events-none hidden items-center
							text-[15px] leading-1 xl:grid
							xl:grid-rows-[repeat(7,var(--cell-size))]'
					>
						<div className='opacity-0'>sun</div>
						<div>mon</div>
						<div className='opacity-0'>tue</div>
						<div>wed</div>
						<div className='opacity-0'>thu</div>
						<div>fri</div>
						<div className='opacity-0'>sat</div>
					</div>

					{/* Days */}
					<div
						className='grid grid-flow-col
							grid-cols-[repeat(53,var(--cell-size))]
							grid-rows-[repeat(7,var(--cell-size))] justify-center p-1
							[--cell-size:12px] min-[450px]:gap-0.5
							min-[450px]:[--cell-size:6px] sm:gap-0.5 sm:[--cell-size:9px]
							md:gap-0.5 md:[--cell-size:11px] lg:gap-0.75 lg:[--cell-size:15px]
							xl:gap-1 xl:[--cell-size:15px]'
					>
						{currentHabit?.days?.map((day, i) => {
							return (
								<button
									key={i}
									onClick={() => {
										setCurrentHabit((prev) => ({
											...prev,
											days: prev.days.map((d, pdi) => ({
												...d,
												checked: pdi === i ? !d.checked : d.checked,
											})),
										}));
									}}

									style={{
										backgroundColor:
											day.dayNumber === null
												? 'transparent'
												: day?.checked
													? theme?.highlight
													: 'var(--color-bg)',
									}}
									className='group relative flex cursor-pointer items-center
										justify-center rounded-sm border-2 border-transparent
										text-xs text-white hover:border-white
										min-[450px]:rounded-[1.7px] xl:rounded-[3.2px]'
								>
									{/* {day?.dayNumber === null ? '' : day?.dayNumber + 1} */}

									<div
										className='group-hover: invisible absolute -bottom-20 z-20
											h-20 min-w-40 -translate-y-1.5 p-3 opacity-0 transition
											duration-400 ease-in-out group-hover:visible
											group-hover:translate-y-1.5 group-hover:opacity-100'
									>
										<ToolTip tracker={habit} day={day} />
									</div>
								</button>
							);
						})}
					</div>
				</main>

				<div
					className={`grid w-full flex-col gap-0.75 transition-all duration-400
						ease-in-out ${
							expandedTracker === habit.id
								? 'visible translate-y-1.5 grid-rows-[1fr] opacity-100'
								: 'invisible -translate-y-1.5 grid-rows-[0fr] opacity-0'
						} `}
				>
					<div
						className='flex items-center justify-between overflow-hidden pr-10'
					>
						<div
							className='flex w-full flex-col p-2 text-sm leading-tight
								max-[650px]:text-[11px]'
						>
							<span>Current streak: 3</span>
							<span>Longest streak: 20</span>
							<span>Average: 2</span>
							<span>Total entries: 10 days</span>
						</div>
						<button
							className='flex cursor-pointer gap-2 rounded-md bg-white/20 px-4
								py-2 whitespace-nowrap transition duration-300 *:items-center
								hover:bg-white/30'
						>
							Log today
							<Icon icon='streamline-ultimate:pen-write' className='' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
