import React from "react";
import { Link } from "react-scroll";

const About = () => {
	return (
		<div className="about style1" id="about">
			<div className="content">
				<h5>Hello, I am Afolabi Olawale</h5>
				<p>
					Aside being the software developer you are looking for, I'm
					also a content writer with great flair for paying attention
					to details.
				</p>
				<p>
					I'm a highly productive Software Developer with proven years
					of experience in web and mobile application development.
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
