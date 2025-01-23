import Link from 'next/link';

const Welcome: React.FC = () => {
	return (
		<div className='flex flex-wrap lg:mb-6' data-testid='welcome'>
			<div className='info-section '>
				<div>Welcome to my terminal portfolio. (Version 1.1.0)</div>
				<div>
					For a list of available commands, type `<a className='text-red-500'>help</a>`.
				</div>
			</div>
		</div>
	);
};

export default Welcome;
