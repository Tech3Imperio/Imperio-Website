import { tempHeroImage } from "../../assets/Images";
import { Hero } from "../../components";

export const Getquote = () => {
	return (
		<main>
			<section>
				<Hero
					img={tempHeroImage}
					altText="Hero image for product"
					header="Get a quote."
					subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
					curve
				/>
				<header className=" italic text-[3.4rem] text-[--third] ml-24">
					Fill this form to get your quote.
				</header>
				<p className=" text-3xl text-[--third] ml-24">via whatsapp.</p>
				<div className=" mb-12">
					<form>
						<div className=" flex flex-col ml-24">
							<label
								htmlFor="name"
								className=" italic text-3xl mt-5"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								className=" bg-transparent border border-black outline-none max-w-96 rounded-md py-[5.5px]"
							/>
							<label
								htmlFor="name"
								className=" italic text-3xl mt-5"
							>
								E-mail
							</label>
							<input
								type="email"
								name="name"
								className=" bg-transparent border border-black outline-none max-w-96 rounded-md py-[5.5px]"
							/>
							<label
								htmlFor="name"
								className=" italic text-3xl mt-5"
							>
								Whatsapp no.
							</label>
							<input
								type="text"
								name="name"
								className=" bg-transparent border border-black outline-none max-w-96 rounded-md py-[5.5px]"
							/>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};
