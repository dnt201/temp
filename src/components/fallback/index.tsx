import { FC, ReactNode, Suspense } from 'react';

interface FallbackProps {
	page: ReactNode;
}

const Fallback: FC<FallbackProps> = ({ page }) => {
	return (
		<Suspense
			fallback={
				//Todo: Add a loading spinner
				<div>Loading...</div>
			}
		>
			{page}
		</Suspense>
	);
};

export default Fallback;
