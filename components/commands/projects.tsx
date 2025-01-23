import { useContext, useEffect } from 'react';
import { checkRedirect, getCurrentCmdArry, isArgInvalid } from '../../utils/funcs';

import { termContext } from '../terminal';
import Usage from '../usage';

const Projects: React.FC = () => {
	const { arg, history, rerender } = useContext(termContext);

	/* ===== get current command ===== */
	const currentCommand = getCurrentCmdArry(history);

	/* ===== check current command is redirect ===== */
	useEffect(() => {
		if (checkRedirect(rerender, currentCommand, 'projects')) {
			projects.forEach(({ id, url }) => {
				id === parseInt(arg[1]) && window.open(url, '_blank');
			});
		}
	}, [arg, rerender, currentCommand]);

	/* ===== check arg is valid ===== */
	const checkArg = () => (isArgInvalid(arg, 'go', ['1', '2', '3', '4']) ? <Usage cmd='projects' /> : null);

	return arg.length > 0 || arg.length > 2 ? (
		checkArg()
	) : (
		<div data-testid='projects'>
			<div className='mt-2 mb-3 leading-6'>
				“Talk is cheap. Show me the code”? I got you. <br />
				Here are some of my projects you shouldn&apos;t misss
			</div>
			{projects.map(({ id, title, desc }) => (
				<div className='mt-2 mb-3' key={id}>
					<div className='font-bold mb-1'>{`${id}. ${title}`}</div>
					<div className='text-justify leading-6 max-w-sm'>{desc}</div>
				</div>
			))}
			<Usage cmd='projects' />
		</div>
	);
};

const projects = [
	{
		id: 1,
		title: "Sat Naing's Blog",
		desc: 'My personal blog where I can write down my thoughts and experiences.',
		url: 'https://satnaing.dev/blog/',
	},
	{
		id: 2,
		title: 'Haru Fashion',
		desc: 'An ecommerce web application where users can browse various products and make purchases.',
		url: 'https://haru-fashion.vercel.app/',
	},
	{
		id: 3,
		title: 'Haru API',
		desc: 'A RESTful API developed for the Haru fashion ecommerce project.',
		url: 'https://satnaing.github.io/haru-api/',
	},
	{
		id: 4,
		title: 'AstroPaper Blog Theme',
		desc: 'A minimal, accessible and SEO-friendly Astro blog theme.',
		url: 'https://astro-paper.pages.dev/',
	},
];

export default Projects;
