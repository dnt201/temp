import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Protection: FC = () => {
	return (
		//Todo: Add side bar and header, footer in GeneralTemplate
		// <GeneralTemplate>
		<Outlet />
		// </GeneralTemplate>
	);
};

export default Protection;
