import About from './commands/about';
import Certifications from './commands/certifications';
import Clear from './commands/clear';
import Echo from './commands/echo';
import Education from './commands/education';
import Email from './commands/email';
import GeneralOutput from './commands/general-output';
import Gui from './commands/gui';
import Help from './commands/help';
import History from './commands/history';
import Projects from './commands/projects';
import Socials from './commands/socials';
import TechnicalSkills from './commands/technical-skills';
import Welcome from './commands/Welcome';
import WorkExperience from './commands/work-experience';
import { termContext } from './terminal';
import { useContext } from 'react';

type Props = {
	index: number;
	cmd: string;
};
const Output: React.FC<Props> = ({ index, cmd }) => {
	const { arg } = useContext(termContext);

	const specialCmds = ['projects', 'socials', 'themes', 'echo'];

	// return 'Usage: <cmd>' if command arg is not valid
	// eg: about tt
	if (!specialCmds.includes(cmd) && arg.length > 0)
		return (
			<div className='mt-3 mb-3 leading-6' data-testid='usage-output'>
				Usage: {cmd}
			</div>
		);

	return (
		<div className='pb-1' data-testid={index === 0 ? 'latest-output' : null}>
			{
				{
					about: <About />,
					clear: <Clear />,
					echo: <Echo />,
					education: <Education />,
					email: <Email />,
					// gui: <Gui />,
					help: <Help />,
					history: <History />,
					projects: <Projects />,
					skills: <TechnicalSkills />,
					certifications: <Certifications />,
					// socials: <Socials />,
					'work-experience': <WorkExperience />,
					welcome: <Welcome />,
					'who-am-i': <GeneralOutput>visitor</GeneralOutput>,
				}[cmd]
			}
		</div>
	);
};

export default Output;
