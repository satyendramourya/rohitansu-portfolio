import { certifications } from '@/lib/data';
import React from 'react';

const Certifications = () => {
	return (
		<div className='space-y-2'>
			{certifications.map((certification, index) => (
				<li key={index} className='text-white hover:underline hover:ring-offset-2 hover:text-blue-400 list-disc'>
					{certification}
				</li>
			))}
		</div>
	);
};

export default Certifications;
