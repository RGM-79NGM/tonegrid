import { Route, Routes } from 'react-router-dom';
import { CreateTracker } from './pages/CreateTracker';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Prototype } from './pages/Prototype';
import { RootLayout } from './pages/RootLayout';
import { Settings } from './pages/Settings';

export const App = () => (
	<Routes>
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/create-habit' element={<CreateTracker />} />
			<Route path='/proto-type' element={<Prototype />} />
			<Route path='/*' element={<NotFound />} />
		</Route>
	</Routes>
);
