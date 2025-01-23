type Props = {
	cmd: 'themes' | 'projects' | 'socials';
	marginY?: boolean;
};

const arg = {
	themes: { placeholder: 'theme-name', example: 'ubuntu' },
	projects: { placeholder: 'project-no', example: '4' },
	socials: { placeholder: 'social-no', example: '1' },
};

const Usage: React.FC<Props> = ({ cmd }) => {
	const action = cmd === 'themes' ? 'set' : 'go';
	return (
		<div className='mt-3 mb-3 leading-6' data-testid={`${cmd}-invalid-arg`}>
			Usage: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
			eg: {cmd} {action} {arg[cmd].example}
		</div>
	);
};

export default Usage;
