import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = () => {
	return (
		<div className="app">
			<Sidebar />
			<div className="main">
				<About />
				<Projects />
				<Skills />
				<Contact />
			</div>
		</div>
	);
};

export default App;
