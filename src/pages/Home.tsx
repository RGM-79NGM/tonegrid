import { v4 as uuid } from 'uuid';
import { HeatMap2 } from '../components/heat-map-2/HeatMap2';
import { generateHabitDays } from '../calculations/generateHabitDays';

export const Home = () => {
	const habits = JSON.parse(localStorage.getItem('habits') || '[]');

	const tempHabit = {
		id: uuid(),
		name: 'Read books',
		type: 'CHECKBOX',
		colorTheme: 'rose',
		days: generateHabitDays(),
	};

	console.log(tempHabit);

	return (
		<div className='flex min-h-0 flex-1 flex-col gap-5 px-[7%] lg:px-[7%]'>
			{!habits?.length ? (
				<main
					className='flex flex-1 items-center justify-center md:text-xl
						lg:text-3xl'
				>
					No trackers found
				</main>
			) : (
				<main className='flex flex-col items-center gap-5 py-20'>
					{habits.map((habit, i) => (
						<div key={i} className='w-full'>
							<HeatMap2 habit={habit} />
						</div>
					))}
				</main>
			)}
		</div>
	);
};
