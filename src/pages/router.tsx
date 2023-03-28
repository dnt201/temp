import Fallback from 'components/fallback';
import Protection from 'components/protection';
import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));

const RouterApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Auth Routes */}
				<Route path="/" element={<Protection />}>
					<Route path="/" element={<Fallback page={<Home />} />} />

					{/* Defect Management */}
					<Route path="defect/*">
						{/* <Route
							index
							element={<Fallback page={<DefectList />} />}
						/>
						<Route
							path="detail/:id"
							element={<Fallback page={<DefectDetail />} />}
						/> */}
						<Route
							path="*"
							element={<Navigate replace to="/404" />}
						/>
					</Route>
				</Route>

				{/* Public Routes */}
				{/* <Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;
