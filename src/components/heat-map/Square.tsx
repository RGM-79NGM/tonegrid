import { ToolTip } from '../ToolTip';

export const Square = ({
	day,
	tracker,
	theme,
	setSelectedTracker,
	setSelectedDay,
	setShowModal,
}) => {
	// console.log('the day color theme:', day.blockColor);
	if (tracker.type === 1) {
		// let squareColor: any;
		// console.log('day: ', day);
		//
		// if (day.amount === 0) {
		// 	squareColor = theme.block4;
		// } else if (day.amount <= tracker.level4 && day.amount > tracker.level3) {
		// 	squareColor = theme.block4;
		// } else if (day.amount <= tracker.level3 && day.amount > tracker.level2) {
		// 	squareColor = theme.block3;
		// } else if (day.amount <= tracker.level2 && day.amount > tracker.level1) {
		// 	squareColor = theme.block2;
		// } else if (day.amount <= tracker.level1 && day.amount > 0) {
		// 	squareColor = theme.block1;
		// }
		// console.log('squareColor: ', squareColor);

		return (
			<button
				type='button'
				onClick={() => {
					setSelectedTracker(tracker);
					setSelectedDay(day);
					setShowModal(true);
				}}
				style={{
					backgroundColor: day.blockColor,
					...day.hideEventsStyle,
				}}
				className='group relative flex cursor-pointer items-center justify-center rounded-sm border-2 border-transparent text-white text-xs hover:border-white xl:rounded-[3.2px] min-[450px]:rounded-[1.7px]'
			>
				{/* {day?.dayNumber === null ? '' : day?.dayNumber + 1} */}

				<div className='-bottom-20 -translate-y-1.5 pointer-events-none invisible absolute z-20 h-20 min-w-40 p-3 opacity-0 transition delay-300 duration-400 ease-in-out group-hover:visible group-hover:translate-y-1.5 group-hover:opacity-100'>
					<ToolTip tracker={tracker} day={day} />
				</div>
			</button>
		);
	}

	if (tracker.type === 0) {
		return (
			<button
				type='button'
				onClick={() => {
					setSelectedTracker(tracker);
					setSelectedDay(day);
					setShowModal(true);
				}}
				style={{
					pointerEvents: day.dayNumber === null ? 'none' : 'auto',
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
	}
};
