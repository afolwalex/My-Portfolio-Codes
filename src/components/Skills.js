import React from "react";
import { skills } from "../data";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skills = () => {
	return (
		<div className="skills style1" id="skills">
			<div className="content">
				<div className="title">
					<h5>My Stacks</h5>
				</div>
				<div className="skills-list">
					{skills.map((skill) => (
						<div className="skill" key={skill.id}>
							<AiOutlineCheckSquare />
							<span>{skill.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
