import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { returnColorIntensity, returnColorTheme } from '../../constants/themes';
import { ToolTip } from '../ToolTip';
import { Select } from '../heat-map/Select.tsx';
import { AddEntryModal } from '../modals/AddEntryModal.tsx';

export const HeatMap = ({
	tracker,
	trackers,
	setTrackers,
	handleDeleteTracker,
}: any) => {
	const [expandedTracker, setExpandedTracker] = useState(null);
	const [selectedTracker, setSelectedTracker] = useState(null);
	const [selectedDay, setSelectedDay] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [changed, setChanged] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const theme = returnColorTheme(tracker.colorTheme);

	// useEffect(() => {}, [selectedTracker]);

	return (
		<>
			<div
				onBlur={() => setShowDropdown(false)}
				className='flex flex-1 justify-center'
			>
				<div className='90vw,1200px)] flex w-[clamp(200px, flex-col items-center justify-center gap-2 rounded-md bg-bg2 p-3'>
					<header className='flex w-full items-center justify-between pr-1 font-medium text-[18px] text-gray-200'>
						<div className='flex items-center gap-5'>
							<Select
								showDropDown={showDropdown}
								setShowDropDown={setShowDropdown}
							/>
							<div className='flex items-center gap-2'>
								<span className='text-base1 text-sm lg:text-base xl:text-md'>
									{tracker?.name || '-'}
								</span>
								<span className='text-base2 text-xs lg:text-sm'>{`${tracker?.entries?.length || '0'} days`}</span>
							</div>
						</div>
						<div className='flex h-full items-center gap-2 p-0.5'>
							<div className='flex items-center gap-2 text-[13px] text-base2 sm:text-[13px] xl:text-[16px]'>
								less
								<div className='grid grid-flow-col grid-cols-[repeat(5,var(--cell-size))] grid-rows-[repeat(1,var(--cell-size))] justify-center gap-px p-1 [--cell-size:12px] max-[600px]:gap-px sm:gap-px md:gap-0.5 lg:gap-0.75 min-[450px]:gap-0.5 sm:[--cell-size:9px] md:[--cell-size:11px] lg:[--cell-size:15px] xl:[--cell-size:16px] min-[450px]:[--cell-size:6px]'>
									{Array.from({ length: 5 }, (_, i) => ({ id: i })).map(
										(item, i) => (
											<div
												key={item.id}
												style={{
													backgroundColor: returnColorIntensity(theme, i),
												}}
												className='flex cursor-pointer items-center justify-center rounded-sm text-white text-xs xl:rounded-[3.2px] min-[450px]:rounded-[1.7px]'
											/>
										),
									)}
								</div>
								more
							</div>
							<div className='cursor-pointer rounded-full p-px hover:bg-white/10'>
								<Icon
									onClick={() =>
										setExpandedTracker(() => {
											if (expandedTracker === tracker.id) {
												setExpandedTracker(null);
											} else {
												setExpandedTracker(tracker.id);
											}
										})
									}
									icon='mdi:keyboard-arrow-down'
									className='size-lg text-base1 max-[550px]:size-3 max-[580px]:size-4'
								/>
							</div>
						</div>
					</header>

					<main className='grid grid-cols-[auto_1fr] gap-1'>
						<div className='pointer-events-none hidden items-center text-[15px] text-base2 leading-1 xl:grid xl:grid-rows-[repeat(7,var(--cell-size))]'>
							<div className='opacity-0'>sun</div>
							<div>mon</div>
							<div className='opacity-0'>tue</div>
							<div>wed</div>
							<div className='opacity-0'>thu</div>
							<div>fri</div>
							<div className='opacity-0'>sat</div>
						</div>

						{/* Days */}
						<div className='grid grid-flow-col grid-cols-[repeat(53,var(--cell-size))] grid-rows-[repeat(7,var(--cell-size))] justify-center p-1 [--cell-size:12px] sm:gap-0.5 md:gap-0.5 lg:gap-0.75 xl:gap-1 min-[450px]:gap-0.5 sm:[--cell-size:9px] md:[--cell-size:11px] lg:[--cell-size:15px] xl:[--cell-size:15px] min-[450px]:[--cell-size:6px]'>
							{tracker?.days?.map((day: any, i: any) => {
								return (
									<button
										type='button'
										key={day?.dayIndex}
										onClick={() => {
											setSelectedTracker(tracker);
											setSelectedDay(day);
											setShowModal(true);
										}}
										style={{
											backgroundColor:
												day.dayNumber === null
													? 'transparent'
													: day?.checked
														? theme?.highlight
														: 'var(--color-bg)',
										}}
										className='group relative flex cursor-pointer items-center justify-center rounded-sm border-2 border-transparent text-white text-xs hover:border-white xl:rounded-[3.2px] min-[450px]:rounded-[1.7px]'
									>
										{/* {day?.dayNumber === null ? '' : day?.dayNumber + 1} */}

										<div className='group-hover: -bottom-20 -translate-y-1.5 invisible absolute z-20 h-20 min-w-40 p-3 opacity-0 transition duration-400 ease-in-out group-hover:visible group-hover:translate-y-1.5 group-hover:opacity-100'>
											<ToolTip tracker={tracker} day={day} />
										</div>
									</button>
								);
							})}
						</div>
					</main>

					<div
						className={`grid w-full flex-col gap-0.75 transition-all duration-400 ease-in-out ${
							expandedTracker === tracker.id
								? 'visible translate-y-1.5 grid-rows-[1fr] opacity-100'
								: '-translate-y-1.5 invisible grid-rows-[0fr] opacity-0'
						} `}
					>
						<div className='flex items-center justify-between overflow-hidden pr-10'>
							{tracker.type === 0 ? (
								<div className='flex w-full flex-col p-2 text-[13px] leading-tight max-[580px]:text-[9px] max-[650px]:text-[11px]'>
									<span>Current Streak: 3</span>
									<span>Longest streak: 20</span>
									{/* <span>Average: 2</span> */}
									<span>Total entries: 10 days</span>
								</div>
							) : (
								<div className='flex w-full flex-col p-2 text-[13px] leading-tight max-[580px]:text-[9px] max-[650px]:text-[11px] max-[700px]:text-xs'>
									<span>Today: $10.00</span>
									<span>Average: $21.00</span>
									<span>Current streak: 5</span>
									<span>Total: $3,231,000.000</span>
								</div>
							)}

							<div className='flex items-center gap-2'>
								<button
									type='button'
									title='Delete tracker'
									className='cursor-pointer rounded-full p-1.75 transition duration-200 hover:bg-white/10'
								>
									<Icon
										icon='akar-icons:trash-can'
										onClick={() => handleDeleteTracker(tracker.id)}
										className='size-4 min-[700px]:size-4.5'
									/>
								</button>

								<button
									type='button'
									title='Pin to your desktop'
									className='cursor-pointer rounded-full p-1.75 transition duration-200 hover:bg-white/10'
								>
									<Icon
										icon='akar-icons:pin'
										className='size-4 min-[700px]:size-4.5'
									/>
								</button>

								<button
									type='button'
									className='flex cursor-pointer gap-2 whitespace-nowrap rounded-md bg-white/20 px-4 py-2 text-xs transition duration-300 *:items-center hover:bg-white/30 min-[750px]:text-base'
								>
									Log today
									<Icon icon='streamline-ultimate:pen-write' className='' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Day Details Modal */}
			<AddEntryModal
				showModal={showModal}
				hideModal={() => {
					setShowModal(false);
					setSelectedDay(null);
					setSelectedTracker(null);
				}}
				selectedTracker={selectedTracker}
				setSelectedTracker={setSelectedTracker}
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
				trackers={trackers}
				setTrackers={setTrackers}
			/>
		</>
	);
};
