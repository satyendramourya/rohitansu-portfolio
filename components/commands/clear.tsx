import { useContext, useEffect } from 'react';
import { termContext } from '../terminal';

const Clear: React.FC = () => {
	const { arg, clearHistory } = useContext(termContext);
	useEffect(() => {
		if (arg.length < 1) clearHistory?.();
	}, [arg.length, clearHistory]);
	return arg.length > 0 ? <div className='mt-[0.75rem] mb-3 leading-6'>Usage: clear</div> : <></>;
};

export default Clear;
