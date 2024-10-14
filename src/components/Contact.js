import React from "react";
import { BsWhatsapp, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
	return (
		<div className="contact style2" id="contact">
			<div className="content">
				<div className="title">
					<h5>Contact</h5>
					<p>
						You can chat me up on any of the social medium below.
						I'm available 24/7.
					</p>
				</div>
				<div className="socials">
					<a href="https://wa.me/2349051151706" target={"_blank"}>
						<BsWhatsapp />
					</a>
					<a
						href="https://www.linkedin.com/in/olawale-isaac-725140b3"
						target={"_blank"}
					>
						<BsLinkedin />
					</a>
					<a href="https://twitter.com/afolwalex" target={"_blank"}>
						<BsTwitter />
					</a>
					<a href="mailto:olawaleisaac9@gmail.com" target={"_blank"}>
						<AiOutlineMail />
					</a>
				</div>
				<p className="top">Here is my resume for your perusal.</p>
				<a
					href="https://drive.google.com/file/d/1qkawQ-PWrMlgT4iS7kbHGzpK0oLeed57/view?usp=drive_link"
					target={"_blank"}
					className="main-btn"
				>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Contact;
