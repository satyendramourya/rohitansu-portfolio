import { useContext } from 'react';
import _ from 'lodash';
import { termContext } from '../terminal';

const Echo: React.FC = () => {
	const { arg } = useContext(termContext);

	let outputStr = _.join(arg, ' ');
	outputStr = _.trim(outputStr, "'"); // remove trailing single quotes ''
	outputStr = _.trim(outputStr, '"'); // remove trailing double quotes ""
	outputStr = _.trim(outputStr, '`'); // remove trailing backtick ``

	return <div className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem '>{outputStr}</div>;
};

export default Echo;
