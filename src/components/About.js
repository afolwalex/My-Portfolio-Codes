import React from "react";
import { Link } from "react-scroll";

const About = () => {
	return (
		<div className="about style1" id="about">
			<div className="content">
				<h5>Hello, I am Afolabi Olawale</h5>
				<p>
					I am the guy you are looking for. Be rest assured, I pay
					great attention to details and my time management skills is
					superb!
				</p>
				<p>
					I'm a highly skilled software developer with proven years of
					experience in web and mobile application development.
				</p>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					className="main-btn"
				>
					Hire Me
				</Link>
			</div>
		</div>
	);
};

export default About;
