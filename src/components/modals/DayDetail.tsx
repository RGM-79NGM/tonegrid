import { themes } from '../../constants/themes.ts';

export const DayDetail = ({ tracker, day }: any) => {
	const colorTheme = Object.values(themes[tracker?.colorTheme]);
	console.log('This is the colorTheme: ', colorTheme);

	return (
		<div className='rouded-md flex flex-col'>
			<div className='justify-between'>
				<div>
					{/* <div className={`text-[${colorTheme?.highlight}]`}></div> */}
					<span>{tracker?.name || '-'}</span>
				</div>
				<span>Esc</span>
			</div>
			<span>Date: {day?.dayLabel}</span>
			<span>Date: {day?.dayLabel}</span>
			<div className=''>
				<h3>Notes:</h3>
				<input type='text' placeholder='Click to type your notes here' />
			</div>
			<div className='w-full'>
				<button>Save</button>
			</div>
		</div>
	);
};
