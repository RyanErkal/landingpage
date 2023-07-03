import React from "react";
import Testimonial from "./Testimonial";

export default function Testimonials() {
	return (
		<>
			<section class="grid px-36 sm:px-24 py-8 gap-6 bg-gray-800 text-gray-100">
				<h1 class="text-3xl md:col-span-3 sm:col-span-1 justify-self-center subpixel-antialiased">
					<strong class="text-green-400 flex justify-center">
						Testimonials
					</strong>
				</h1>
				<Testimonial
					name="Arnold Schwarzenegger"
					duration="16 weeks"
					results="7x Mr Olympia"
					testimonial="Get to the choppa!"
					image="https://cdn.sportsmanor.com/wp-content/uploads/2023/01/26200351/Untitled-design-3-2-1140x597.jpg"
				/>
				<Testimonial
					name="Ronnie Coleman"
					duration="12 weeks"
					results="8x Mr Olympia"
					testimonial="Yeah buddy!"
					image="https://staticg.sportskeeda.com/editor/2022/09/72c55-16642722942984-1920.jpg"
				/>
				<Testimonial
					name="Jay Cutler"
					duration="20 weeks"
					results="4x Mr Olympia"
					testimonial="Light weight baby!"
					image="https://i.ytimg.com/vi/uAnmyxUN7Kk/maxresdefault.jpg"
				/>
				<Testimonial
					name="Chris Bumstead"
					duration="24 weeks"
					results="3x Classic Physique Olympia"
					testimonial="Clathic Phythique!"
					image="https://staticg.sportskeeda.com/editor/2023/01/50009-16736185748780-1920.jpg"
				/>
				<Testimonial
					name="Ramon Dino"
					duration="8 weeks"
					results="2nd Place Classic Physique Olympia"
					testimonial="Forearms are overrated!"
					image="https://fitnessvolt.com/wp-content/uploads/2023/02/Collage-Maker-06-Feb-2023-03-21-PM.jpg"
				/>
				<Testimonial
					name="Logan Franklin"
					duration="8 weeks"
					results="Chad Physique Olympia"
					testimonial="I'm not a bodybuilder, I'm a physique competitor!"
					image="https://fitnessvolt.com/wp-content/uploads/2021/11/Logan-Franklin.jpg"
				/>
			</section>
		</>
	);
}
