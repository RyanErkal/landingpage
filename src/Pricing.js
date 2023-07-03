import React from "react";
import Price from "./Price";

export default function Pricing() {
	return (
		<>
			<section class="px-6 py-8 bg-gray-800 text-gray-100">
				<div class="flex flex-row justify-center">
					<div class="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
						<h1 class="text-3xl col-span-3 justify-self-center subpixel-antialiased">
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
						/>
					</div>
				</div>
			</section>
		</>
	);
}
