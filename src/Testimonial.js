import React from "react";

export default function Testimonial(props) {
	return (
		<>
			<section class="shadow-md p-5 hover:scale-105 hover:bg-green-100 rounded-3xl bg-green-50 transition-all">
				<div>
					<h1 class="text-xl justify-self-center subpixel-antialiased">
						<strong class="text-gray-600 flex justify-center">
							{props.name}
						</strong>
					</h1>
					<p class="text-gray-600 flex justify-center">
						{props.duration}
					</p>
					<p class="text-gray-600 flex justify-center">
						{props.results}
					</p>
					<p class="text-gray-600 flex justify-center text-center italic">
						"{props.testimonial}"
					</p>
					<img
						class="object-contain mt-2 h-auto w-auto shadow-md rounded-3xl mx-auto flex justify-center"
						src={props.image}
						alt={props.name}
					/>
				</div>
			</section>
		</>
	);
}
