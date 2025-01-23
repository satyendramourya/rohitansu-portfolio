import { commands } from '@/lib/data';
import { generateTabs } from '../../utils/funcs';

const Help: React.FC = () => {
	return (
		<div className='mt-1 mb-3' data-testid='help'>
			{commands.map(({ cmd, desc, tab }) => (
				<li className='mb-1' key={cmd}>
					<span className='text-yellow-300'>{cmd}</span>
					{generateTabs(tab)}
					<span className='text-blue-400 mb-3 max-w-md'>- {desc}</span>
				</li>
			))}
			<div className='font-md mt-[1rem] md:hidden '>
				<div className='mt-1'>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div>
				<div className='mt-1'>Up Arrow {generateTabs(5)} =&gt; go back to previous command</div>
				<div className='mt-1'>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
			</div>
		</div>
	);
};

export default Help;
