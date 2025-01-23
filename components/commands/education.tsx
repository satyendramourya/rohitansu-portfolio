import { education } from '@/lib/data';

const Education: React.FC = () => {
	return (
		<div className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem  ' data-testid='education'>
			<div className='mb-3'>Here is my education background!</div>
			{education.map(({ degree, university, year, cgpa }, index) => (
				<li className='mb-4' key={index}>
					<p className='space-x-4'>
						<span className='title font-bold mb-1 hover:underline underline-offset-4'>{degree}</span>
						<span className='text-yellow-400'>{cgpa}</span>
					</p>
					<p className='space-x-4'>
						<span>{university}</span>
						<span className='text-yellow-400'>{year}</span>
					</p>
				</li>
			))}
		</div>
	);
};

export default Education;
