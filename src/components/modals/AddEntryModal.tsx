import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { themes } from '../../constants/themes.ts';

export const AddEntryModal = ({
	showModal,
	hideModal,
	selectedTracker,
	// setSelectedTracker,
	trackers,
	setTrackers,
	selectedDay,
	setSelectedDay,
}: any) => {
	const [trueOriginalDay, setTrueOriginalDay] = useState(selectedDay);
	const colorTheme = selectedTracker
		? themes[selectedTracker.colorTheme]
		: themes.terminal;

	// console.log('selectedTracker: ', selectedTracker);
	// console.log('originalDay:', trueOriginalDay);
	// console.log('selectedDay:', selectedDay);
	function handleSave() {
		let updatedTracker = {
			...selectedTracker,
			days: selectedTracker.days.map((d: any) =>
				d.dayLabel !== selectedDay.dayLabel ? d : selectedDay,
			),
		};

		if (
			selectedTracker.type === 1 &&
			selectedDay.amount !== trueOriginalDay.amount
		) {
			// Re-calculate the average amount
			let daysWithAmount = selectedTracker.days
				.filter((d) => d.amount > 0)
				.map((dwa) => dwa.amount);

			// Calculate the amount levels
			let maximum = 0;

			// 1. Find the maximum
			daysWithAmount.map((d) => {
				if (maximum === 0) {
					maximum = Number(d);
				} else if (maximum < d) {
					maximum = Number(d);
				}
			});

			console.log(maximum);

			// 2. Define 4 levels 25% over the maxium, in decreasing order
			const level4 = maximum; // 100%
			const level3 = maximum * (75 / 100); // 75%
			const level2 = maximum * (50 / 100); // 50%
			const level1 = maximum * (25 / 100); // 25%

			// Include the amount added/changed of the selected day
			daysWithAmount = [...daysWithAmount, selectedDay.amount];

			const sum = daysWithAmount.reduce((acc, amount) => {
				return acc + Number(amount);
			}, 0);

			const average = sum / daysWithAmount.length;

			// 3. Pass it to the tracker
			updatedTracker = {
				...updatedTracker,
				average,
				level4,
				level3,
				level2,
				level1,
			};
			console.log('The total length: ', daysWithAmount);
			console.log('The sum: ', sum);
			console.log('The average: ', average);
		}

		const updatedTrackers = trackers.map((trk: any) => {
			let trackerToReturn: any;

			if (trk.id === selectedTracker.id) {
				trackerToReturn = updatedTracker;
			} else {
				trackerToReturn = trk;
			}

			return trackerToReturn;
		});

		setTrackers(updatedTrackers);
		localStorage.setItem('trackers', JSON.stringify(updatedTrackers));
		// console.log('this is the updated value: ', updatedTracker.days);
		hideModal(false);
	}

	useEffect(() => {
		if (!showModal) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				if (e.key === 'Escape') {
					hideModal();
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [showModal, hideModal]);

	useEffect(() => {
		if (showModal) setTrueOriginalDay(selectedDay);
	}, [showModal, selectedDay?.dayLabel]);

	return (
		<div
			className={`${!showModal ? 'invisible h-0 w-0 opacity-0 ' : 'visible fixed top-0 right-0 bottom-0 left-0 z-10 flex h-dvh w-dvw items-center justify-center bg-black/60 opacity-100'}`}
		>
			<div
				className={`${showModal ? 'visible min-w-130 translate-y-5 opacity-100' : '-trasnlate-y-5 h-0 opacity-0'} rouded-md invisible absolute z-20 flex flex-col gap-3 rounded-sm border border-white/20 bg-bg2 p-4 transition duration-400`}
			>
				{showModal && selectedDay && (
					<>
						<div className='grid grid-cols-[auto_1fr_auto] items-center gap-2'>
							<div
								style={{ backgroundColor: colorTheme?.highlight }}
								className='size-3 rounded-xs'
							/>
							<span className='wrap-anywhere font-semibold text-lg'>
								{selectedTracker?.name || '-'}
							</span>
							<button
								type='button'
								onClick={() => hideModal()}
								className='hover:-translate-y-0.5 cursor-pointer rounded-md bg-white/10 px-0.75 py-px font-medium text-sm transition duration-150'
							>
								Esc
							</button>
						</div>

						<div className='flex flex-col gap-2 px-2 pt-3'>
							<div className='flex items-center gap-5 '>
								<div className='mr-2 font-normal'>Date:</div>
								<div className=''>
									{dayjs(selectedDay?.dayLabel).format('MMMM DD, YYYY - ddd')}
								</div>
							</div>

							{selectedTracker?.type === 1 && (
								<div className='flex items-center gap-5'>
									<div className='mr-0 font-normal'>
										{selectedTracker?.metric}s:
									</div>

									<div className='rounded-md p-3'>
										<input
											value={selectedDay.amount}
											onChange={(e) =>
												setSelectedDay((prev) => ({
													...prev,
													amount: e.target.value,
												}))
											}
											placeholder={`Today's amount of ${selectedTracker?.metric ? `${selectedTracker?.metric}s` : '-'}`}
											className='w-full resize-none outline-0'
										/>
									</div>
								</div>
							)}

							<div className=''>
								<h3>Notes:</h3>
								<div className='mt-2 p-3'>
									<textarea
										value={selectedDay?.notes}
										onChange={(e) =>
											setSelectedDay((prev) => ({
												...prev,
												notes: e.target.value,
											}))
										}
										rows={5}
										placeholder={`Today's notes...`}
										className='w-full resize-none outline-0'
									/>
								</div>
							</div>
							<div className='flex w-full justify-end px-4'>
								<button
									onClick={() => handleSave()}
									type='button'
									className='cursor-pointer rounded-[5px] bg-emerald-700 px-5 py-2 font-semibold transition duration-150 hover:brightness-105'
								>
									Save
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
