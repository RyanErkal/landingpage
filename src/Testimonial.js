import React from "react";

export default function Testimonial(props) {
	return (
		<>
			<section class="shadow-md p-5 rounded-3xl bg-green-50">
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
					<p class="text-gray-600 flex justify-center">
						{props.testimonial}
					</p>
					<img
						class="object-contain w-84 shadow-md rounded-3xl mx-auto flex justify"
						src={props.image}
						alt={props.name}
					/>
				</div>
			</section>
		</>
	);
}
