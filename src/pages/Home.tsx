import { HeatMap2 } from '../components/heat-map-2/HeatMap2';
import { generateHabitDays } from '../calculations/generateHabitDays';

export const Home = () => {
	const habits = JSON.parse(localStorage.getItem('habits') || '[]');

	const tempHabit = {
		name: 'Read books',
		type: 'CHECKBOX',
		colorTheme: 'terminal',
		days: generateHabitDays(),
	};

	return (
		<div
			className='flex min-h-0 flex-1 flex-col gap-5 bg-red-300 px-[7%]
				lg:px-[7%]'
		>
			{!habits?.length ? (
				<main
					className='flex flex-1 items-center justify-center md:text-xl
						lg:text-3xl'
				>
					No habits found
				</main>
			) : (
				<main className='flex flex-col items-center gap-3 py-2'>
					{habits.map((habit, i) => (
						<div key={i} className='w-full'>
							<HeatMap2 habit={tempHabit} />
						</div>
					))}
				</main>
			)}
		</div>
	);
};
