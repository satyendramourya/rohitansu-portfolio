import { useContext, useEffect } from 'react';
import { checkRedirect, generateTabs, getCurrentCmdArry, isArgInvalid } from '../../utils/funcs';
import { termContext } from '../terminal';
import Usage from '../usage';

const Socials: React.FC = () => {
	const { arg, history, rerender } = useContext(termContext);

	/* ===== get current command ===== */
	const currentCommand = getCurrentCmdArry(history);

	/* ===== check current command makes redirect ===== */
	useEffect(() => {
		if (checkRedirect(rerender, currentCommand, 'socials')) {
			socials.forEach(({ id, url }) => {
				id === parseInt(arg[1]) && window.open(url, '_blank');
			});
		}
	}, [arg, rerender, currentCommand]);

	/* ===== check arg is valid ===== */
	const checkArg = () => (isArgInvalid(arg, 'go', ['1', '2', '3', '4']) ? <Usage cmd='socials' /> : null);

	return arg.length > 0 || arg.length > 2 ? (
		checkArg()
	) : (
		<div className='mt-1 mb-3' data-testid='socials'>
			<div className='mt-2 mb-4'>Here are my social links</div>
			{socials.map(({ id, title, url, tab }) => (
				<li className='mb-1' key={title}>
					<span className='mb-3 md:block'>{`${id}. ${title}`}</span>
					{generateTabs(tab)}
					<span className='mb-3 md:block'>- {url}</span>
				</li>
			))}
			<Usage cmd='socials' marginY />
		</div>
	);
};

const socials = [
	{
		id: 1,
		title: 'GitHub',
		url: 'https://github.com/satnaing',
		tab: 3,
	},
	{
		id: 2,
		title: 'Dev.to',
		url: 'https://dev.to/satnaing',
		tab: 3,
	},
	{
		id: 3,
		title: 'Facebook',
		url: 'https://www.facebook.com/satnaing.dev',
		tab: 1,
	},
	{
		id: 4,
		title: 'Instagram',
		url: 'https://instagram.com/satnaing.dev',
		tab: 0,
	},
];

export default Socials;
