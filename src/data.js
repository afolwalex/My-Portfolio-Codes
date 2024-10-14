import WhokupImg from "../src/images/whokup.jpeg";
import GetriPayImg from "../src/images/getripay.jpeg";
import GetriSaveImg from "../src/images/getrisave.jpeg";
import BetaDisneyImg from "../src/images/betadisney.jpg";
import AceAfricaImg from "../src/images/aceafrica.jpg";
import BluepiloImg from "../src/images/bluepilo.png";

const projects = [
	{
		id: 1,
		title: "Bluepilo Inventory",
		description: "An Inventory Solution available on web and mobile",
		task: "In charge of the developement and management of the web solution and mobile app",
		img: BluepiloImg,
		link: "https://app.bluepilo.com",
	},
	{
		id: 2,
		title: "Whokup",
		description: "A mobile app for giving feedbacks on locations.",
		task: "Developed and deployed the mobile app",
		img: WhokupImg,
		link: "https://play.google.com/store/apps/details?id=com.whokup_mobile",
	},
	{
		id: 3,
		title: "BetaDisney",
		description:
			"An E-Commerce website you can buy computing devices, mobile phones and other electronics",
		task: "Project lead on the product.",
		img: BetaDisneyImg,
		link: "https://www.betadisney.com/",
	},
	{
		id: 4,
		title: "GetriPay",
		description: "A trusted, fast, secure and convenient payment solution",
		task: "In charge of the development and management",
		img: GetriPayImg,
		link: "https://play.google.com/store/apps/details?id=com.getripay",
	},
	{
		id: 5,
		title: "Ace Africa",
		description:
			"A website for a tech Startup focused on teaching software development.",
		task: "Developed and Designed the website.",
		img: AceAfricaImg,
		link: "https://aceafrica.netlify.app",
	},
	{
		id: 6,
		title: "GetriSave",
		description:
			"Helps you secure your money with interests. A platform that allows you to save.",
		task: "In charge of the development and management",
		img: GetriSaveImg,
		link: "https://www.getrisave.com/",
	},
];

const others = [
	{
		id: 1,
		link: "https://play.google.com/store/search?q=splitmulti&c=apps",
		name: "Splitmulti",
		desc: "An E-commerce mobile App.",
	},
	{
		id: 2,
		link: "https://famwatch.ng",
		name: "FamWatch",
		desc: `A Mobile App to track your loved ones.`,
	},
	{
		id: 3,
		link: "https://hellospin.ng",
		name: "HelloSpin",
		desc: `A Web App to play games.`,
	},
	{
		id: 4,
		link: "https://getripay.com/pos",
		name: "GetriPay POS",
		desc: `A POS Solution`,
	},
];

const skills = [
	{ id: 1, name: "HTML/CSS/SCSS/BootStrap/Tailwind" },
	{ id: 2, name: "JavaScript/TypeScript" },
	{ id: 3, name: "Git/Github/GitLab/Bitbucket" },
	{ id: 4, name: "ReactJs" },
	{ id: 5, name: "NextJs" },
	{ id: 6, name: "React Native" },
	{ id: 7, name: "NodeJs" },
	{ id: 8, name: "ExpressJs" },
	{ id: 9, name: "Ionic" },
	{ id: 10, name: "NestJs" },
	{ id: 11, name: "MongoDB" },
	{ id: 12, name: "PostGres" },
];

export { projects, others, skills };
