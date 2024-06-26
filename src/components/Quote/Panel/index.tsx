import { QuoteButton } from "../..";
import { bgProduct } from "../../../assets/Images";

export const Quote = () => {
	return (
		<section className="relative">
			<div className="relative w-full h-full">
				<img
					src={bgProduct}
					alt="Backdrop for product"
					title="Backdrop for product"
					className="w-screen h-[50vh] lg:h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#f2f0e980] from-75% to-[#03237b3a] flex justify-center items-center">
					<div className="bg-[--black] h-[56.75%] w-[68.48%] text-white rounded-4xl overflow-hidden flex flex-col gap-3 tablet:gap-6 xl:gap-8 px-7 tablet:px-12 xl:px-16 justify-center">
						<h1 className="Raleway text-2xl tablet:text-[1.75rem] xl:text-5xl">
							Get an instant quote.
						</h1>
						<div className="text-xs lg:text-base pb-2 phone:pb-8 w-full tablet:w-3/5">
							Choose your desired glass railing system and get an
							immediate quote straight to your WhatsApp. Quick,
							easy, and convenient.
						</div>
						<div>
							<QuoteButton className="max-tablet:text-[0.5rem]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
