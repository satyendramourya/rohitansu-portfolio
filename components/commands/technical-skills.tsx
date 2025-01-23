import { softSkills, technicalSkills } from '@/lib/data';
import React from 'react';

const TechnicalSkills = () => {
	return (
		<div>
			{technicalSkills.map((skill, index) => {
				return (
					<div key={index} className='mb-2 ml-4'>
						<h3 className='text-lg text-green-400 font-bold'>{skill.category}</h3>
						<ul className='list-disc flex gap-4 space-x-4 pl-6'>
							{skill.skills.map((s, i) => (
								<li className='hover:text-blue-400 hover:underline underline-offset-4 hover:cursor-move' key={i}>
									{s}
								</li>
							))}
						</ul>
					</div>
				);
			})}

			<div className='mb-2 ml-4'>
				<h3 className='text-lg text-yellow-400 font-bold'>Soft Skills</h3>
				<ul className='list-disc flex gap-4 space-x-4 pl-6'>
					{softSkills.map((s, i) => (
						<li className='hover:text-blue-400 hover:underline underline-offset-4 hover:cursor-move' key={i}>
							{s}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TechnicalSkills;
