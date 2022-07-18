import React from "react";
import { others, projects } from "../data";

const Projects = () => {
	return (
		<div className="projects style2" id="projects">
			<div className="content">
				<div className="title">
					<h5>Projects I've worked on:</h5>
					<p>
						You can check my{" "}
						<a
							href="https://github.com/afolwalex"
							target={"_blank"}
						>
							Github
						</a>{" "}
						repository for more...
					</p>
				</div>
				<div className="project-list">
					{projects.map((p) => (
						<div className="project-box" key={p.id}>
							<h5>{p.title}</h5>
							<p className="para">{p.description}</p>

							<ul className="list">
								{p.task.map((t, i) => (
									<li key={i + 1}>{t}</li>
								))}
							</ul>
							<div className="flx">
								<a
									href={p.link}
									target={"_blank"}
									className="main-btn"
								>
									Check Out
								</a>
								<img src={p.img} alt="logo" />
							</div>
						</div>
					))}
				</div>
				<div className="project-others">
					<p>Other mentions includes:</p>
					<ul>
						{others.map((o) => (
							<li key={o.id}>
								<a href={o.link} target={"_blank"}>
									{o.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Projects;
