import WhokupImg from "../src/images/whokup.jpeg";
import GetriPayImg from "../src/images/getripay.jpeg";
import GetriSaveImg from "../src/images/getrisave.jpeg";
import BetaDisneyImg from "../src/images/betadisney.jpg";
import AceAfricaImg from "../src/images/aceafrica.jpg";
import SoftnelImg from "../src/images/softnel.jpg";
import SkoolneticsImg from "../src/images/skoolnetics.jpg";
import DreyWalletImg from "../src/images/dreywallet.jpg";

const projects = [
	{
		id: 1,
		title: "Ace Africa",
		description:
			"A website for a tech Startup focused on teaching software development.",
		task: [
			"Developed the whole website using React.",
			"Includes an Enquiry section that directs to WhatsApp",
			"Has an amazing design for Stacks registration",
			"Built the registration backend with Express JS",
		],
		img: AceAfricaImg,
		link: "https://aceafrica.netlify.app",
	},
	{
		id: 2,
		title: "Whokup",
		description: "A mobile app for giving feedbacks on locations.",
		task: [
			"Developed the mobile app using React Native",
			"Developed the backend using Express Js",
			"Worked with two other team mates on other parts of the app.",
			"App will be live on Google Play and App Store on the release date.",
		],
		img: WhokupImg,
		link: "https://whokup.com",
	},
	{
		id: 3,
		title: "Skoolnetics",
		description: "A school management system",
		task: [
			"Part of a team of four involved in the development of this system.",
			"Front view and Backend built with Express Js with Pug template engine.",
			"Features includes: Timetable, Result Compilation, Attendance, CBT, Staff, Parent and Student management.",
			"It also includes Assignment tracking, Session management and reports.",
		],
		img: SkoolneticsImg,
		link: "https://skoolnetics.herokuapp.com/",
	},
	{
		id: 4,
		title: "GetriPay",
		description: "A trusted, fast, secure and convenient payment solution",
		task: [
			"Part of a team of brilliant minds that built this.",
			"Fully involved in the development of the mobile app.",
			"Mobile App is built with React Native",
			"App is live on Google PlayStore and Apple Store.",
		],
		img: GetriPayImg,
		link: "https://www.getripay.com/",
	},
	{
		id: 5,
		title: "BetaDisney",
		description:
			"An E-Commerce website you can buy computing devices, mobile phones and other electronics",
		task: [
			"Developed the web app using React for FrontEnd and Express Js for Backend",
			"Contains all the basic feature of an E-Commerce solution",
			"Impressive design with good category management",
		],
		img: BetaDisneyImg,
		link: "https://www.betadisney.com/",
	},
	{
		id: 6,
		title: "GetriSave",
		description:
			"Helps you secure your money with interests. A platform that allows you to save.",
		task: [
			"Part of a team of brilliant minds that built this.",
			"Fully participated in the frontend development of this solution.",
			"Mobile App built with React Native.",
			"Also involved in the web version built with React.",
			"App is live on Google PlayStore and Apple Store.",
		],
		img: GetriSaveImg,
		link: "https://www.getrisave.com/",
	},
	{
		id: 7,
		title: "DreyWallet",
		description: "A platform to sell Gift Cards and Cryptocurrency",
		task: [
			"Part of a team of two that built this.",
			"Front view and Backend built with Express Js with Pug template engine.",
			"Impressive designs with an amazing dashboard for the users.",
		],
		img: DreyWalletImg,
		link: "https://drewallet.com/",
	},
	{
		id: 8,
		title: "Softnel",
		description: "A Demo for Softnel official website",
		task: [
			"Built with React",
			"Impressive designs with nice animations.",
			"A one page design with no scrolling.",
		],
		img: SoftnelImg,
		link: "https://softnel.herokuapp.com/",
	},
];

const others = [
	{ id: 1, link: "https://incothekgroup.com/", name: "IncothekGroup" },
	{ id: 2, link: "https://curatorams.herokuapp.com/", name: "Curator" },
];

const skills = [
	{ id: 1, name: "HTML" },
	{ id: 2, name: "CSS/SCSS/BootStrap/Tailwind" },
	{ id: 3, name: "JavaScript" },
	{ id: 4, name: "Git" },
	{ id: 5, name: "Github" },
	{ id: 6, name: "Vue" },
	{ id: 7, name: "React" },
	{ id: 8, name: "React Native" },
	{ id: 9, name: "NodeJs" },
	{ id: 10, name: "ExpressJs" },
	{ id: 11, name: "NextJs" },
	{ id: 12, name: "NestJs" },
	{ id: 13, name: "MongoDB" },
	{ id: 14, name: "PostGres" },
];

export { projects, others, skills };
