import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { generateHabitDays } from '../calculations/generateHabitDays';
import { HeatMap } from '../components/heat-map/HeatMap';

export const Home = () => {
	const [trackers, setTrackers] = useState(
		JSON.parse(localStorage.getItem('habits') || '[]'),
	);

	const tempHabit = {
		id: uuid(),
		name: 'Read books',
		type: 'CHECKBOX',
		colorTheme: 'rose',
		days: generateHabitDays(),
	};

	console.log(tempHabit);

	return (
		<>
			<div className='flex min-h-0 flex-1 flex-col gap-5 px-[7%] lg:px-[7%]'>
				{!trackers?.length ? (
					<main className='flex flex-1 items-center justify-center md:text-xl lg:text-3xl'>
						No trackers found
					</main>
				) : (
					<main className='flex flex-col items-center gap-5 py-20'>
						{trackers.map((tracker, i) => (
							<div key={tracker.id} className='w-full'>
								<HeatMap
									tracker={tracker}
									trackers={trackers}
									setTrackers={setTrackers}
								/>
							</div>
						))}
					</main>
				)}
			</div>
		</>
	);
};
