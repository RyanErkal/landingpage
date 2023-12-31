import React from "react";
import "./index.css";

export default function Nav() {
	/* function toggleDarkMode() {
		const html = document.querySelector("html");
		const currentClass = html.getAttribute("class");
		if (currentClass === "dark") {
			html.setAttribute("class", "");
		} else {
			html.setAttribute("class", "dark");
		}
		document.getElementById("dark-mode-toggle").innerHTML =
			html.getAttribute("class") === "dark"
				? '<span class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-green-400">light_mode</span>'
				: '<span class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-green-400">dark_mode</span>';
	} */

	return (
		<>
			<nav class="bg-gray-900 px-6 py-8 shadow-lg flex flex-row">
				<span class="md:invisible sm:visible material-symbols-outlined text-gray-100 hover:text-green-400 basis-1/12 transition-all">
					menu
				</span>
				<div class="md:visible sm:invisible flex flex-row justify-end basis-11/12">
					<h3 class="text-gray-100 mr-4 hover:scale-110 hover:font-bold hover:text-green-400 transition-all">
						About
					</h3>
					<h3 class="text-gray-100 mr-4 hover:scale-110 hover:font-bold hover:text-green-400 transition-all">
						Achievements
					</h3>
					<h3 class="text-gray-100 mr-4 hover:scale-110 hover:font-bold hover:text-green-400 transition-all">
						Testimonials
					</h3>
					<h3 class="text-gray-100 mr-4 hover:scale-110 hover:font-bold hover:text-green-400 transition-all">
						Coaching Packages
					</h3>
					<h3 class="text-gray-100 mr-4 hover:scale-110 hover:font-bold hover:text-green-400 transition-all">
						Contact
					</h3>
					<h3 class="text-gray-100 mr-4 hover:scale-110 hover:font-bold hover:text-green-400 transition-all">
						FAQs
					</h3>
					{/* <button onClick={toggleDarkMode} id="dark-mode-toggle">
						<span
							id="dark-mode-icon"
							class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-green-400 ">
							dark_mode
						</span>
					</button> */}
				</div>
			</nav>
		</>
	);
}
