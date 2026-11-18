import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './pages/RootLayout';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';
import { CreateTracker } from './pages/CreateTracker';
import { Prototype } from './pages/Prototype';

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
