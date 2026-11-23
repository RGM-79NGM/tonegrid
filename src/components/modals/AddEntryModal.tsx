import dayjs from 'dayjs';
import { useEffect } from 'react';
import { themes } from '../../constants/themes.ts';

export const AddEntryModal = ({
	showModal,
	setShowModal,
	tracker,
	day,
}: any) => {
	const colorTheme = tracker ? themes[tracker.colorTheme] : themes.terminal;
	console.log('This is the colorTheme: ', colorTheme);
	console.log('DayDetail modal loaded!');

	useEffect(() => {
		if (!showModal) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				if (e.key === 'Escape') {
					setShowModal(false);
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [showModal, setShowModal]);

	return (
		<div
			className={`${!showModal ? 'invisible h-0 w-0 opacity-0 ' : 'visible fixed top-0 right-0 bottom-0 left-0 z-10 flex h-dvh w-dvw items-center justify-center bg-black/80 opacity-100'}`}
		>
			<div
				className={`${showModal ? 'visible min-w-130 translate-y-5 opacity-100' : '-trasnlate-y-5 h-0 opacity-0'} rouded-md invisible absolute z-20 flex flex-col gap-3 rounded-sm border border-white/20 bg-bg2 p-4 transition duration-400`}
			>
				<div className='grid grid-cols-[auto_1fr_auto] items-center gap-2'>
					<div
						style={{ backgroundColor: colorTheme?.highlight }}
						className='size-5 rounded-xs'
					/>
					<span className='wrap-anywhere font-semibold text-lg'>
						{tracker?.name || '-'}
					</span>
					<button
						type='button'
						onClick={() => setShowModal(false)}
						className='hover:-translate-y-0.5 cursor-pointer rounded-md bg-white/10 px-0.75 py-px font-medium text-sm transition duration-150'
					>
						Esc
					</button>
				</div>

				<div className='flex flex-col gap-2 px-2 pt-3'>
					<div className='flex items-center gap-5 '>
						<div className='mr-2 font-normal'>Date:</div>
						<div className=''>
							{dayjs(day?.dayLabel).format('MMMM DD, YYYY - ddd')}
						</div>
					</div>

					{tracker?.type === 'binary' && (
						<div className='flex items-center gap-5'>
							<div className='mr-0 font-normal'>Test{tracker?.metric}s:</div>

							<div className='rounded-md p-3'>
								<input
									placeholder={`Today's amount of ${tracker?.metric ? `${tracker?.metric}s` : '-'}`}
									className='w-full resize-none outline-0'
								/>
							</div>
						</div>
					)}

					<div className=''>
						<h3>Notes:</h3>
						<div className='mt-2 p-3'>
							<textarea
								rows={5}
								placeholder={`Today's notes...`}
								className='w-full resize-none outline-0'
							/>
						</div>
					</div>
					<div className='flex w-full justify-end px-4'>
						<button
							type='button'
							className='cursor-pointer rounded-[5px] bg-emerald-700 px-5 py-2 transition duration-150 hover:brightness-105'
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
