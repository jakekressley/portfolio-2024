import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from 'next/image'
import githubDark from '../public/github-dark.svg'
import githubLight from '../public/github-light.svg'
import linkedInDark from '../public/linkedin-dark.svg'
import linkedInLight from '../public/linkedin-light.svg'
import envelopeDark from '../public/envelope-dark.png'
import envelopeLight from '../public/envelope-light1.png'
import profilePic from '../public/jake.png'
import MagicButton from './ui/MagicButton'
import MyFlipWords from './MyFlipWords'

const Hero = () => {
	return (
		<div className='pb-20 pt-12' id='about'>
			<div>
				<Spotlight className="-top-40 -left-10 md:-left-32 md:-top20 h-screen" fill="#FF00FF" />
				<Spotlight className="top-10 -left-10 h-screen w-[50vw]" fill="#DE3163" />
				<Spotlight className="-top-40 left-[20rem] h-screen" fill="blue" />
			</div>

			<div className="h-[60vh] w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.15] bg-dot-black/[0.15] absolute flex items-center justify-center top-0 left-0">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			<div className='flex justify-center relative my-20 z-10 max-w-7xl p-[-10rem]'>
				<div className='max-w-[89vw] md-max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
					<div className='flex justify-between items-center gap-36'>
						<div className='flex flex-col justify-center items-center gap-6 max-w-full'>
							<h1 className="text-center text-[40px] md:text-4xl lg:text-5xl font-bold max-w-60 dark:text-white text-black-100 ">Jake Kressley</h1>
							<MyFlipWords />
							<div className='flex gap-6 justify-center items-center'>
								<a href="https://github.com/jakekressley" target='blank' className='dark:hidden block'>
									<Image
										src={githubLight}
										width={64}
										height={64}
										alt="Github Logo"
										className='dark:hidden block'
									/>
								</a>
								<a href="https://github.com/jakekressley" target='blank' className='hidden dark:block'>
									<Image
										src={githubDark}
										width={64}
										height={64}
										alt="Github logo"
										className='hidden dark:block'
									/>
								</a>
								<a href="https://www.linkedin.com/in/jakekressley/" target='blank' className='dark:hidden block'>
									<Image
										src={linkedInLight}
										width={64}
										height={64}
										alt="LinkedIn Logo"
										className='dark:hidden block'
									/>
								</a>
								<a href="https://www.linkedin.com/in/jakekressley/" target='blank' className='hidden dark:block'>
									<Image
										src={linkedInDark}
										width={64}
										height={64}
										alt="LinkedIn Logo"
										className='hidden dark:block'
									/>
								</a>
								<a href="mailto: kressleyjake@gmail.com" className='dark:hidden block'>
									<Image
										src={envelopeLight}
										width={64}
										height={64}
										alt="Email Envelope Logo"
										className='dark:hidden block ml-2'
									/>
								</a>
								<a href="mailto: kressleyjake@gmail.com" className='hidden dark:block'>
									<Image
										src={envelopeDark}
										width={64}
										height={64}
										alt="Email Envelope Logo" 
										className='hidden dark:block ml-2'
									/>
								</a>
							</div>
							<a href="Jake_Kressley_Resume.pdf" target='blank' rel='noopener norefferer' className="mt-4">
								<MagicButton 
									title="Resume"
								/>
							</a>
						</div>
						<div>
							<Image 
							src={profilePic} 
							alt="alt"
							width={350} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero