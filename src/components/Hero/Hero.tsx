import React from "react";
import { HeroProps } from "../../types";

export const Hero: React.FC<HeroProps> = ({
	img,
	header,
	subHeader,
	height = false,
	curve = false,
	children,
}) => {
	return (
		<section
			className={`relative -top-7 w-full ${
				height && !curve
					? "h-screen max-phone:h-[60vh]"
					: "h-[60vh] max-phone:h-[50vh] rounded-b-4xl overflow-hidden"
			} bg-cover bg-center `}
			style={{ backgroundImage: `url(${img})` }}
		>
			{height && !curve ? (
				<div
					className={`absolute inset-0 bg-gradient-to-r from-black from-10% via-[rgba(0,0,0,0.6)] via-75% to-transparent]`}
				/>
			) : (
				<div
					className={`absolute inset-0 bg-gradient-to-r from-black via-transparent via-90% to-[rgba(241,239,231,0.5)]`}
				/>
			)}
			<div
				className={`relative z-10 h-full leading-snug phone:leading-normal flex flex-col justify-center phone:justify-start ${
					height && !curve ? "phone:pt-72" : "phone:pt-60"
				} text-white pl-9 phone:pl-16 tablet:pl-24 laptop:pl-32 desktop:pl-44`}
			>
				<header
					className={`text-[2.7rem] phone:text-[3rem] tablet:text-[3.3rem] laptop:text-[3.5rem] desktop:text-[3.8rem] Raleway ${
						height && !curve ? "w-4/5" : "w-full"
					}`}
				>
					{header}
				</header>
				<div
					className={`text-xs phone:text-base ${
						height && !curve ? "w-4/5" : "w-full"
					}`}
				>
					{subHeader}
				</div>
				<div className="pt-8">{children}</div>
			</div>
		</section>
	);
};
