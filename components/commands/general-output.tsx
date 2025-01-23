type Props = {
	children: string;
};

const GeneralOutput: React.FC<Props> = ({ children }) => (
	<div className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem  ' data-testid='general-output'>
		{children}
	</div>
);
export default GeneralOutput;
