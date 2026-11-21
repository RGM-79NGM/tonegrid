import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

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
