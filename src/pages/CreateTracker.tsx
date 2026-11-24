import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
	generateAmountTrackerDays,
	generateBinaryTrackerDays,
} from '../calculations/generateHabitDays';
import { habitTypes } from '../constants/habitTypes';
import { themes } from '../constants/themes';

interface Tracker {
	id?: string;
	name?: string;
	metric?: string;
	average?: number;
	type?: number;
	colorTheme?: string;
	days?: object[];
	level1: number;
	level2: number;
	level3: number;
	level4: number;
}

export const CreateTracker = () => {
	const navigate = useNavigate();
	const [newTracker, setNewTracker] = useState<Tracker>({
		id: uuidv4(),
		name: '',
		metric: '',
		average: 0,
		type: habitTypes[0].id, // 0 = binary; 1 = amount;
		colorTheme: Object.keys(themes)[0],
		days: [],
		level1: 0,
		level2: 0,
		level3: 0,
		level4: 0,
	});
	const [showColorDropdown, setShowColorDropdown] = useState(false);
	const [showTypeDropdown, setShowTypeDropdown] = useState(false);
	const [errors, setErrors] = useState({
		name: '',
		metric: '',
		type: '',
	});

	function validate() {
		const isValid = !!newTracker.name;
		setErrors((prev) => ({
			...prev,
			name: isValid ? '' : 'Please fill out the habit name',
		}));

		return isValid;
	}

	function handleSave() {
		if (!validate()) return;

		const generatedDays =
			newTracker.type === 0
				? generateBinaryTrackerDays()
				: generateAmountTrackerDays();
		const timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');

		const finalData = {
			...newTracker,
			days: generatedDays,
			createAt: timestamp,
		};

		console.log('New tracker ready to be stored: ', finalData);
		const currentHabits = JSON.parse(localStorage.getItem('trackers') || '[]');
		const mergedHabits = [...currentHabits, finalData];
		localStorage.setItem('trackers', JSON.stringify(mergedHabits));

		navigate('/');
	}

	return (
		<div className='flex w-full flex-1 justify-center p-2'>
			<div
				onBlur={() => {
					setShowColorDropdown(false);
					setShowTypeDropdown(false);
				}}
				className='flex w-[90%] flex-col items-center py-5 lg:w-[70%]'
			>
				<h1 className='font-nunito text-3xl'>Create a new tracker</h1>

				{/* Fields */}
				<div className='*:bg- grid w-full grid-rows-[repeat(3,1fr)_auto] gap-8 p-[5%]'>
					<div className='flex flex-col gap-1'>
						Tracker Type
						<div className='relative flex flex-col gap-2'>
							<button
								onClick={() => setShowTypeDropdown((prev) => !prev)}
								type='button'
								className='flex cursor-pointer items-center justify-between gap-2 rounded-md bg-bg2 px-5 py-2'
							>
								<div className='flex items-center gap-2'>
									<span className=''>{habitTypes[newTracker?.type]?.name}</span>
								</div>

								<Icon icon='mdi:keyboard-arrow-down' />
							</button>

							{/* Dropdown */}
							<ul
								onMouseDown={(e) => e.preventDefault()}
								className={`${
									showTypeDropdown
										? 'translate-y-0 opacity-100'
										: `-translate-y-2 pointer-events-none bg-transparent opacity-0`
								} absolute top-[105%] left-0 z-10 w-[90%] rounded-md border border-bg2 bg-bg2 transition duration-200`}
							>
								{habitTypes.map((habitType) => (
									<li
										key={habitType.id}
										onKeyDown={() => {
											if (habitType.id !== newTracker.type) {
												setNewTracker((prev) => ({
													...prev,
													type: habitType.id,
												}));
											}
											setShowTypeDropdown((prev) => !prev);
										}}
										onClick={() => {
											if (habitType.id !== newTracker.type) {
												setNewTracker((prev) => ({
													...prev,
													type: habitType.id,
												}));
											}
											setShowTypeDropdown((prev) => !prev);
										}}
										className='flex cursor-pointer items-center gap-2 rounded-t-md bg-bg2 px-6 py-2 text-base1 transition duration-150 hover:bg-bg'
									>
										<span>{habitType.name}</span>
										<span className='text-base2 text-xs'>
											{habitType.description}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className='relative flex flex-col gap-1'>
						Enter a title for your tracker
						<input
							value={newTracker?.name}
							onChange={(e) =>
								setNewTracker((prev) => ({ ...prev, name: e.target.value }))
							}
							type='text'
							onFocus={() => setErrors((prev) => ({ ...prev, name: '' }))}
							className='rounded-md bg-bg2 px-4 py-2 text-base1 outline-0'
						/>
						{/* Warning block */}
						<div
							className={`${
								errors.name
									? 'translate-y-0 opacity-100'
									: `-translate-y-2 pointer-events-none bg-transparent opacity-0`
							} absolute top-[123%] left-[30%] flex items-center gap-2 rounded-sm bg-white p-3 font-semibold text-sm transition duration-200`}
						>
							<div className='absolute top-[-19%] size-4.5 rotate-45 bg-white' />
							<div className='flex items-center justify-center rounded-sm bg-orange-600 p-1'>
								<Icon icon='material-symbols:error' className='text-white' />
							</div>
							<div className='text-zinc-800'>{errors?.name || '-'}</div>
						</div>
					</div>

					{newTracker.type === 1 && (
						<div className='relative flex flex-col gap-1'>
							Enter a metric for your tracker (e.g. hour, mile, $)
							<input
								value={newTracker?.metric}
								onChange={(e) =>
									setNewTracker((prev) => ({ ...prev, metric: e.target.value }))
								}
								type='text'
								onFocus={() => setErrors((prev) => ({ ...prev, name: '' }))}
								className='rounded-md bg-bg2 px-4 py-2 text-base1 outline-0'
							/>
							{/* Warning block */}
							<div
								className={`${
									errors.metric
										? 'translate-y-0 opacity-100'
										: `-translate-y-2 pointer-events-none bg-transparent opacity-0`
								} absolute top-[123%] left-[30%] flex items-center gap-2 rounded-sm bg-white p-3 font-semibold text-sm transition duration-200`}
							>
								<div className='absolute top-[-19%] size-4.5 rotate-45 bg-white' />
								<div className='flex items-center justify-center rounded-sm bg-orange-600 p-1'>
									<Icon icon='material-symbols:error' className='text-white' />
								</div>
								<div className='text-zinc-800'>{errors?.metric || '-'}</div>
							</div>
						</div>
					)}

					{/* Select the color theme */}
					<div className='flex flex-col gap-1'>
						Pick a color
						<div className='relative flex flex-col gap-2'>
							<button
								onClick={() => setShowColorDropdown((prev) => !prev)}
								type='button'
								className='flex cursor-pointer items-center justify-between gap-2 rounded-md bg-bg2 px-5 py-2'
							>
								<div className='flex items-center gap-2'>
									<div
										style={{
											backgroundColor: themes[newTracker.colorTheme].highlight,
										}}
										className='size-3 rounded-sm'
									/>
									{themes[newTracker.colorTheme]?.label}
								</div>

								<Icon icon='mdi:keyboard-arrow-down' />
							</button>

							{/* Dropdown */}
							<ul
								onMouseDown={(e) => e.preventDefault()}
								className={`${
									showColorDropdown
										? 'translate-y-0 opacity-100'
										: `-translate-y-2 pointer-events-none bg-transparent opacity-0`
								} absolute top-[105%] left-0 grid w-[90%] grid-cols-2 rounded-md border border-bg2 bg-bg2 transition duration-200`}
							>
								{Object.entries(themes).map(([name, theme]) => (
									<li
										key={name}
										onKeyDown={() => {
											if (newTracker.colorTheme !== name) {
												setNewTracker((prev) => ({
													...prev,
													colorTheme: name,
												}));
											}
											setShowColorDropdown((prev) => !prev);
										}}
										onClick={() => {
											if (newTracker.colorTheme !== name) {
												setNewTracker((prev) => ({
													...prev,
													colorTheme: name,
												}));
											}
											setShowColorDropdown((prev) => !prev);
										}}
										className='flex cursor-pointer items-center gap-2 rounded-t-md bg-bg2 px-6 py-2 text-base1 transition duration-150 hover:bg-bg'
									>
										<div
											style={{
												backgroundColor: theme.highlight,
											}}
											className='size-3 rounded-sm'
										/>
										{theme?.label || '-'}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className='flex justify-end pr-[3%]'>
						<button
							onClick={handleSave}
							type='button'
							className='cursor-pointer rounded-md bg-highlight px-10 py-3 font-semibold text-black transition duration-200 hover:brightness-110'
						>
							Create tracker
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
