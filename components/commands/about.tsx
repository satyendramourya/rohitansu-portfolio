import { about } from '@/lib/data';
import Link from 'next/link';

const About: React.FC = () => {
	return (
		<div className='mt-[0.25rem] mb-[0.75rem] pt-[0.5rem] leading-6 flex flex-col gap-4' data-testid='about'>
			<p>
				Hello! I&apos;m <span className='font-bold text-green-400'>{about.fullName}</span>, a{' '}
				<span className='font-bold text-green-400'> {about.position}</span> with a penchant for tech and a knack for
				securing the digital world. With a degree in Computer Science and a roster of certifications, I&apos;m your
				trusty digital defender.
			</p>
			<p>
				From blockchain projects to network security, I&apos;ve got you covered. My toolkit includes Parrot, Burp, and a
				strong dose of problem-solving skills. I&apos;m on a mission to bolster cybersecurity, one byte at a time.
			</p>
			<p>
				Let&apos;s connect and explore the cybersecurity landscape, or perhaps share a professional tech insight. After
				all, in the world of technology, knowledge is power.
			</p>

			<span>Location: {about.location}</span>

			<p>
				Connect with me on LinkedIn:{' '}
				<Link href={about.LinkedinLink} target='_blank'>
					<span className='text-blue-400 hover:underline underline-offset-4  '>{about.Linkedin}</span>
				</Link>
			</p>

			<p>
				Email me at:{' '}
				<Link href={about.emailLink} target='_blank'>
					<span className='text-red-400 hover:underline underline-offset-4  '>{about.email}</span>
				</Link>
			</p>

			<span>#CybersecurityExpert</span>
		</div>
	);
};

export default About;
