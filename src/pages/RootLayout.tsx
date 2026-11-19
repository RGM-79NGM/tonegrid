import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const RootLayout = () => {
	return (
		<div className='flex min-h-screen flex-col gap-1'>
			<div className='flex min-h-dvh flex-col'>
				<Header />

				<main className='flex flex-1 flex-col'>
					<Outlet />
				</main>
			</div>
			<Footer />
		</div>
	);
};
