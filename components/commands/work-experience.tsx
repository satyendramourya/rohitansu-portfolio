import { workExperience } from '@/lib/data';
import React from 'react';

//  position: string;
//     company: string;
//     duration: string;
//     responsibilities: string[];
//     highlight: string[];
// }[]
// import workExperience

const WorkExperience = () => {
	return (
		<div>
			{workExperience.map((exp, index) => {
				return (
					<div key={index} className='mb-2 ml-4'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center justify-between'>
							<h3 className='md:text-lg text-green-400 font-bold'>{exp.position}</h3>
							<h4 className='md:text-lg  font-bold'>{exp.company}</h4>
							<h4 className='md:text-lg  font-bold'>{exp.duration}</h4>
						</div>
						<h4 className='md:text-lg text-green-400 font-bold'>Responsibilities</h4>
						<ul className='list-disc flex flex-col md:flex-row gap-4 md:space-x-4 pl-6'>
							{exp.responsibilities.map((s, i) => (
								<li className='hover:text-blue-400 hover:underline underline-offset-4 hover:cursor-move' key={i}>
									{s}
								</li>
							))}
						</ul>
						<h4 className='md:text-lg text-green-400 font-bold'>{exp.highlight && `Highlights`}</h4>
						<ul className='list-disc flex flex-col md:flex-row gap-4 md:space-x-4 pl-6'>
							{exp.highlight &&
								exp.highlight.map((s, i) => (
									<li className='hover:text-blue-400 hover:underline underline-offset-4 hover:cursor-move' key={i}>
										{s}
									</li>
								))}
						</ul>

						<div className='py-[1px] my-4 w-full bg-gray-500' />
					</div>
				);
			})}
		</div>
	);
};

export default WorkExperience;
