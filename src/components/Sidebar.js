import React from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<Link to="about" spy={true} smooth={true}>
						Hello
					</Link>
				</li>
				<li>
					<Link to="projects" spy={true} smooth={true}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="skills" spy={true} smooth={true}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="contact" spy={true} smooth={true}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
