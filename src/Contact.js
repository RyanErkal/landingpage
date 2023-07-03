import React from "react";

export default function Contact() {
	return (
		<>
			<section class="px-6 p-8 bg-gray-800 text-gray-100">
				<div>
					<h1 class="text-3xl col-span-3 justify-self-center subpixel-antialiased">
						<strong class="text-green-400 flex justify-center">
							Contact
						</strong>
					</h1>
					<div class="flex justify-center align-middle px-36">
						<div class="w-full p-8 mb-4 rounded-2xl">
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								<input
									class="w-full bg-green-50 text-gray-800 p-4 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
									placeholder="First Name*"
								/>
								<input
									class="w-full bg-green-50 text-gray-800 p-4 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
									placeholder="Last Name*"
								/>
								<input
									class="w-full bg-green-50 text-gray-800 p-4 rounded-lg focus:outline-none focus:shadow-outline"
									type="email"
									placeholder="Email*"
								/>
								<input
									class="w-full bg-green-50 text-gray-800 p-4 rounded-lg focus:outline-none focus:shadow-outline"
									type="number"
									placeholder="Phone*"
								/>
							</div>
							<div class="my-4">
								<textarea
									placeholder="Message*"
									class="w-full h-32 bg-green-50 text-gray-800 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
							</div>
							<div>
								<button class="bg-gray-400 hover:bg-green-200 hover:text-gray-600 px-3 py-4 rounded-xl w-full text-white">
									Enquire
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
