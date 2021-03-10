/** @format */

import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<section className="hero">
			<div className="hero-center">
				<article className="hero-info">
					<h1
						style={{
							fontSize: "50px",
						}}>
						Payment infrastructure for the internet
					</h1>
					<p>
						Milllions of companies of all sizes-from
						startups to Fortune 500s-use Stripe's software
						and API's to accept payments, send payouts, and
						manage their businesses online
					</p>
					<button className="btn">Start Now</button>
				</article>
				<article className="hero-images">
					<img
						src={phoneImg}
						alt="phone-img"
						className="home"></img>
				</article>
			</div>
		</section>
	);
};

export default Hero;
