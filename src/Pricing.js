import React from "react";
import Price from "./Price";

export default function Pricing() {
	return (
		<>
			<section class="px-36 py-8 bg-gray-800 text-gray-100">
				<div class="flex flex-row justify-center">
					<div class="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
						<h1 class="text-3xl sm:grid-cols-1 md:col-span-3 justify-self-center subpixel-antialiased">
							<strong class="text-green-400 flex justify-center">
								Pricing
							</strong>
						</h1>
						<Price
							package="Lifestyle"
							price="£150 / month"
							perks={[
								"Weekly Loom Video Feedback",
								"Bespoke Training & Nutrition Plan",
								"Supplement Advice",
								"Monthly Zoom Call",
							]}
							link="https://buy.stripe.com/3cs4jp9Ws4JJ5OMbJf"
						/>
						<Price
							package="Competitor"
							price="£250 / month"
							perks={[
								"Everything in Lifestyle Package",
								"Competition & Offseason",
								"24/7 WhatsApp Support",
								"PED Advice",
							]}
							link="https://buy.stripe.com/14k4jpc4A0ttb9600w"
						/>
						<Price
							package="Mentorship"
							price="£350 / month"
							perks={[
								"Everything in Competitor Package",
								"Weekly Zoom Call",
								"Access to Education Hub",
								"Content Strategy",
							]}
							link="https://buy.stripe.com/6oE5nt0lS7VV6SQ00y"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
