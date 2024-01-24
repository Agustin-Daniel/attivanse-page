"use client"
import MotionDiv from '../motion/MotionDiv'
import clsx from 'clsx'
import { useContext } from 'react';
import { ScrollContext } from '@/app/context/ScrollContext';

export const CircleLine = ({	scrollNumber = { mobile: 0, desktop: 0 },
	lineOff = false}) => {


	const scrollPosition = useContext(ScrollContext);
    // console.log(scrollPosition);
	

  return (
    <>
    <MotionDiv
					id="circle"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					style={{
						transition: "transform 0.8s ease",
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="41"
						height="41"
						viewBox="0 0 41 41"
						fill="none"
					>
						<circle
							cx="20.5"
							cy="20.5"
							r="18"
							fill="#EDF7F7"
							className={clsx(
								scrollPosition > scrollNumber.desktop
									? "lg:stroke-blue"
									: "lg:stroke-[#DDDDDD]",
								scrollPosition > scrollNumber.mobile
									? "stroke-blue"
									: "stroke-[#DDDDDD]"
							)}
							strokeWidth="5"
						/>
						<circle
							cx="21"
							cy="21"
							r="5"
							className={clsx(
								scrollPosition > scrollNumber.desktop
									? "lg:fill-blue"
									: "lg:fill-[#AEB6C5]",
								scrollPosition > scrollNumber.mobile
									? "fill-blue"
									: "fill-[#AEB6C5]"
							)}
						/>
					</svg>
				</MotionDiv>
				{!lineOff && (
					<MotionDiv
						className="relative h-full"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<div
							id="line"
							className="h-full lg:h-[238px] w-[3px] bg-grayline"
						></div>
						<div
							id="line"
							className={clsx(
								"h-full lg:h-[238px] w-[3px] bg-blue absolute top-0 z-10 lg:hidden",
								scrollPosition > scrollNumber.mobile
									? "scale-y-1"
									: "scale-y-0"
							)}
							style={{
								transformOrigin: "top",
								transition: "transform 0.8s ease",
							}}
						></div>
						<div
							id="line"
							className={clsx(
								"h-full lg:h-[238px] w-[3px] bg-blue absolute top-0 z-10 hidden lg:block",
								scrollPosition > scrollNumber.desktop
									? "lg:scale-y-1"
									: "lg:scale-y-0",
							)}
							style={{
								transformOrigin: "top",
								transition: "transform 0.8s ease",
							}}
						></div>
					</MotionDiv>
				)}
        </>
  )
}
