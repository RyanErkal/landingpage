import React from "react";

export default function Testimonial(props) {
	return (
		<>
			<section class="group shadow-md p-5 hover:scale-105 hover:bg-green-100 rounded-3xl bg-green-50 transition-all">
				<div>
					<h1 class="group-hover:font-bold text-xl justify-self-center subpixel-antialiased">
						<strong class="text-gray-600 flex justify-center">
							{props.name}
						</strong>
					</h1>
					<p class="group-hover:font-bold text-gray-600 flex justify-center">
						{props.duration}
					</p>
					<p class="group-hover:font-bold text-gray-600 flex justify-center">
						{props.results}
					</p>
					<p class="group-hover:font-bold text-gray-600 flex justify-center text-center italic">
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
