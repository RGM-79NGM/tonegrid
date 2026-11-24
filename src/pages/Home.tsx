import { useState } from 'react';
import { HeatMap } from '../components/heat-map/HeatMap';

export const Home = () => {
	const [trackers, setTrackers] = useState(
		JSON.parse(localStorage.getItem('trackers') || '[]'),
	);

	function handleDeleteTracker(trackerId) {
		const updatedTrackers = trackers.filter((t) => t.id !== trackerId);
		console.log('handleDeleteTracker called', updatedTrackers);
		setTrackers(updatedTrackers);
		localStorage.setItem('trackers', JSON.stringify(updatedTrackers));
	}

	return (
		<>
			<div className='flex min-h-0 flex-1 flex-col gap-5 px-[7%] lg:px-[7%]'>
				{!trackers?.length ? (
					<main className='flex flex-1 items-center justify-center md:text-xl lg:text-3xl'>
						No trackers found
					</main>
				) : (
					<main className='flex flex-col items-center gap-5 py-20'>
						{trackers.map((tracker) => (
							<div key={tracker.id} className='w-full'>
								<HeatMap
									tracker={tracker}
									trackers={trackers}
									setTrackers={setTrackers}
									handleDeleteTracker={handleDeleteTracker}
								/>
							</div>
						))}
					</main>
				)}
			</div>
		</>
	);
};
