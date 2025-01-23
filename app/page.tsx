import Terminal from '@/components/terminal';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='max-w-screen-lg w-full max-auto  shadow-lg shadow-white/0 rounded-md flex flex-col min-h-[500px] max-h-[600px] h-full overflow-hidden '>
			<div className='flex items-center justify-between   p-4 bg-black '>
				<div className=' flex gap-2 '>
					<div className='p-2 w-1 h-1 bg-red-500 rounded-full' />
					<div className='p-2 w-1 h-1 bg-green-500 rounded-full' />
					<div className='p-2 w-1 h-1 bg-yellow-500 rounded-full' />
				</div>

				<Link href='https://www.linkedin.com/in/rohitansupradhan/' target='_blank'>
					<p>Linkedin.RohitansuPradhan</p>
				</Link>
			</div>
			<div className='w-full h-42 h-[100%] overflow-y-scroll no-scrollbar p-4 bg-black/45 tracking-wide min-h-[460px]'>
				<Terminal />
			</div>
		</main>
	);
}
