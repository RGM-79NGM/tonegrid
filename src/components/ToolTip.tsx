import dayjs from 'dayjs';

export const ToolTip = ({ tracker, day }: any) => {
	return (
		<div className='rounded-lg bg-black/20 p-2'>
			{/* For binary trackers*/}
			{tracker?.type === 0 ? (
				<div className='flex flex-col gap-1'>
					<div>{day?.checked ? 'Done' : '-'}</div>
					{/* <div>{day?.dayLabel}</div> */}

					{dayjs(day?.dayLabel).format('MMMM DD, YYYY')}
				</div>
			) : (
				/* For amount trackers*/
				<div className='flex flex-col gap-1'>
					<div>{`${day?.amount} ${tracker?.metric}s`}</div>
					<div>
						{dayjs(day?.dayLabel).format('MMMM DD, YYYY')}
						{/* {day?.date} */}
					</div>
				</div>
			)}
		</div>
	);
};
