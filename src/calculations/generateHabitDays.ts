import dayjs from 'dayjs';

const year = new Date().getFullYear();
const firstWeekDay = new Date(year, 0, 1).getDay(); // week day number e,g: 4
const lastWeekDay = new Date(year, 11, 31).getDay(); // week day number e,g: 4
console.log('lastweekday', lastWeekDay);
const totalDays = Array.from({ length: 371 }, (_, i) => i); // 0 -> 370 = 371

export function generateBinaryTrackerDays() {
	const daysNotIncluded = returnExcludedDays();
	const habitDays = Array.from({ length: 371 }, (_, i) => i).map((_, i) => {
		const isNotIncluded = daysNotIncluded.includes(i);

		return {
			dayIndex: i,
			dayNumber: isNotIncluded ? null : i - firstWeekDay,
			dayLabel: isNotIncluded
				? null
				: dayjs(`${year}-01-01`)
						.add(i - firstWeekDay, 'day')
						.format('YYYY-MM-DD'),
			checked: false,
			notes: '',
			blockColor: isNotIncluded ? 'transparent' : 'var(--color-bg)',
			hideEventsStyle: {
				pointerEvents: isNotIncluded ? 'none' : 'auto',
			},
		};
	});

	return habitDays;
}

export function generateAmountTrackerDays() {
	const daysNotIncluded = returnExcludedDays();
	const habitDays = Array.from({ length: 371 }, (_, i) => i).map((_, i) => {
		const isNotIncluded = daysNotIncluded.includes(i);

		return {
			dayIndex: i,
			dayNumber: isNotIncluded ? null : i - firstWeekDay,
			dayLabel: isNotIncluded
				? null
				: dayjs(`${year}-01-01`)
						.add(i - firstWeekDay, 'day')
						.format('YYYY-MM-DD'),
			amount: 0,
			notes: '',
			blockColor: isNotIncluded ? 'transparent' : 'var(--color-bg)',
			hideEventsStyle: {
				pointerEvents: isNotIncluded ? 'none' : 'auto',
			},
		};
	});

	return habitDays;
}

// Define the days that are not in the calendar 371 - 365 = 6 days not in
export function returnExcludedDays(): any[] {
	let notIncludedDays = [];
	let u = totalDays.length - 1;

	// const daysToRemoveBefore = firstWeekDay - 1; // 3
	// const daysToRemoveAfter = 7 - lastWeekDay; // 3
	// const sum = daysToRemoveBefore + daysToRemoveAfter;

	// const arr = Array.from({ length: sum }, (_, i) => {});

	// Add first indexes to be excluded
	for (let x = 0; x < firstWeekDay; x++) {
		const dayToAdd = totalDays[x];
		notIncludedDays = [...notIncludedDays, dayToAdd];
	}

	// Add last indexes to be excluded
	for (let x = 0; x < 6 - lastWeekDay; x++) {
		notIncludedDays = [...notIncludedDays, totalDays[u]];
		u--;
	}

	// // Add first indexes to be excluded
	// for (let x = firstWeekDay - 1; x > 0; x--) {
	// 	const dayToAdd = x === 0 ? 0 : totalDays[x - 1];
	// 	notIncludedDays = [...notIncludedDays, dayToAdd];
	// }

	// // Add last indexes to be excluded
	// for (let x = lastWeekDay - 1; x > 0; x--) {
	// 	notIncludedDays = [...notIncludedDays, totalDays[u]];
	// 	u--;
	// }

	return notIncludedDays;
}
