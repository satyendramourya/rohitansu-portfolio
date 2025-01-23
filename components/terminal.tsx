'use client';
import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import Output from './output';
import TerminalInfo from './terminal-info';
import { commands } from '@/lib/data';
import { argTab } from '@/utils/funcs';
import _ from 'lodash';

type Term = {
	arg: string[];
	history: string[];
	rerender: boolean;
	index: number;
	clearHistory?: () => void;
};

export const termContext = createContext<Term>({
	arg: [],
	history: [],
	rerender: false,
	index: 0,
});

const Terminal = () => {
	const [hints, setHints] = useState<string[]>([]);
	const containerRef = useRef(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [inputVal, setInputVal] = useState('');
	const [cmdHistory, setCmdHistory] = useState<string[]>(['welcome']);
	const [rerender, setRerender] = useState(false);
	const [pointer, setPointer] = useState(-1);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setCmdHistory([inputVal, ...cmdHistory]);
		setInputVal('');
		setRerender(true);
		setHints([]);
		setPointer(-1);
	};

	const clearHistory = () => {
		setCmdHistory([]);
		setHints([]);
	};

	// focus on input when terminal is clicked
	const handleDivClick = () => {
		inputRef.current && inputRef.current.focus();
	};
	useEffect(() => {
		document.addEventListener('click', handleDivClick);
		return () => {
			document.removeEventListener('click', handleDivClick);
		};
	}, [containerRef]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		setRerender(false);
		const ctrlI = e.ctrlKey && e.key.toLowerCase() === 'i';
		const ctrlL = e.ctrlKey && e.key.toLowerCase() === 'l';

		if (e.key === 'Tab' || ctrlI) {
			e.preventDefault();
			if (!inputVal) return;

			let hintsCmds: string[] = [];
			commands.forEach((c) => {
				if (c.cmd.startsWith(inputVal)) {
					hintsCmds.push(c.cmd);
				}
			});

			const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
			hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

			if (hintsCmds.length > 1) {
				setHints(hintsCmds);
			} else if (hintsCmds.length === 1) {
				const currentCmd = _.split(inputVal, ' ');
				setInputVal(currentCmd.length !== 1 ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}` : hintsCmds[0]);

				setHints([]);
			}
		}
		// if Ctrl + L
		if (ctrlL) {
			clearHistory();
		}

		if (e.key === 'ArrowUp') {
			if (pointer >= cmdHistory.length) return;

			if (pointer + 1 === cmdHistory.length) return;

			setInputVal(cmdHistory[pointer + 1]);
			setPointer((prevState) => prevState + 1);
			inputRef?.current?.blur();
		}

		// Go next cmd
		if (e.key === 'ArrowDown') {
			if (pointer < 0) return;

			if (pointer === 0) {
				setInputVal('');
				setPointer(-1);
				return;
			}

			setInputVal(cmdHistory[pointer - 1]);
			setPointer((prevState) => prevState - 1);
			inputRef?.current?.blur();
		}
	};

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setRerender(false);
		setInputVal(e.target.value);
	}, []);

	// For caret position at the end
	useEffect(() => {
		const timer = setTimeout(() => {
			inputRef?.current?.focus();
		}, 1);
		return () => clearTimeout(timer);
	}, [inputRef, inputVal, pointer]);

	return (
		<section
			// className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem '
			className='flex flex-col-reverse '
			data-testid='terminal-wrapper'
			ref={containerRef}
		>
			{hints.length > 1 && (
				<div>
					{hints.map((hCmd) => (
						<div className='mr-[0.875rem]' key={hCmd}>
							{hCmd}
						</div>
					))}
				</div>
			)}
			<form className=' flex items-end ' onSubmit={handleSubmit}>
				<label htmlFor='terminal-input'>
					<TerminalInfo /> <br className=' sm:hidden' />
					<span className='leading-6 mr-[0.75rem] md:hidden'>&#62;</span>
				</label>
				<input
					className='flex-grow  bg-transparent border-none focus:outline-none'
					title='terminal-input'
					type='text'
					id='terminal-input'
					autoComplete='off'
					spellCheck='false'
					autoFocus
					autoCapitalize='off'
					ref={inputRef}
					value={inputVal}
					onKeyDown={handleKeyDown}
					onChange={handleChange}
				/>
			</form>

			{cmdHistory.map((cmdH, index) => {
				const commandArray = _.split(_.trim(cmdH), ' ');
				const validCommand = _.find(commands, { cmd: commandArray[0] });
				const contextValue = {
					arg: _.drop(commandArray),
					history: cmdHistory,
					rerender,
					index,
					clearHistory,
				};
				return (
					<div key={_.uniqueId(`${cmdH}_`)}>
						<div>
							<TerminalInfo />
							<br className='sm:hidden' />
							<span className='leading-6 mr-[0.75rem] sm:hidden'>&#62;</span>
							<span data-testid='input-command'>{cmdH}</span>
						</div>
						{validCommand ? (
							<termContext.Provider value={contextValue}>
								<Output index={index} cmd={commandArray[0]} />
							</termContext.Provider>
						) : cmdH === '' ? (
							<span className='mb-1' />
						) : (
							<div className='mt-1 mb-4' data-testid={`not-found-${index}`}>
								command not found: {cmdH}
							</div>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default Terminal;
