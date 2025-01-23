import { useContext } from 'react';
import _ from 'lodash';
import { termContext } from '../terminal';

const History: React.FC = () => {
	const { history, index } = useContext(termContext);
	const currentHistory = _.reverse(_.slice(history, index));

	return (
		<div className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem  ' data-testid='history'>
			{currentHistory.map((cmd) => (
				<div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
			))}
		</div>
	);
};

export default History;
