import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, inView } from "framer-motion";
import { createGroups } from "../../utils";

interface TextWrapperProps {
	className?: string;
	children: React.ReactNode;
}
interface TextComponentProps {
	texts: string;
	inner?: boolean;
	className?: string;
}

const TextWrapper = ({ children }: TextWrapperProps) => {
	const text = useRef<HTMLDivElement>(null);
	const [scrollClass, setScrollClass] = useState<string>(
		"opacity-0 text-white font-light"
	);

	const { scrollYProgress } = useScroll({
		target: text,
		offset:
			window.innerWidth <= 768
				? ["start end", "end start"]
				: ["end end", "start start"],
	});

	useEffect(() => {
		const unsubscribe = scrollYProgress.onChange((latest) => {
			if (latest < 0.1) {
				setScrollClass("opacity-0 text-white font-light");
			} else if (latest < 0.2) {
				setScrollClass("opacity-50 text-[#8b939c] font-normal");
			} else {
				setScrollClass("opacity-100 text-[--third] font-medium");
			}
		});
		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<div ref={text}>
			<motion.p className={`Raleway ${scrollClass} transition-500 =`}>
				{children}
			</motion.p>
		</div>
	);
};

export const TextComponent = ({
	className = "",
	texts,
	inner = false,
}: TextComponentProps) => {
	const textList = createGroups(texts.split(" "));

	return (
		<section
			id="textscroller"
			className={`h-screen w-screen flex flex-col justify-center items-center text-2xl md:text-5xl gap-4 ${
				inner ? "" : className
			}`}
		>
			{textList.map((text, index) => (
				<TextWrapper key={index} className={inner ? className : ""}>
					{text}
				</TextWrapper>
			))}
		</section>
	);
};
