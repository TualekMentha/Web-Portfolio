import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picPro from '../assets/WebPortfolio.png'
import picTic from '../assets/TicTacToe.png'

export const data = [
    {
        date: "Aug2023",
        title: "Web Portfolio",
        link: "https://sirilukportfolio.netlify.app/",
        materials: [
            { type: faGithub, link: "https://github.com/TualekMentha/Web-Portfolio" },
            { type: faYoutube, link: "https://youtu.be/DOUP5gwk2jI" },
        ],
        descriptions: [
            " my minimalist portfolio, meticulously built with React and TailwindCSS, influenced by the exquisite style of brittanychiang.com. Explore a clean and intuitive exhibition of my work and skills, where modern design harmonizes with user-friendly functionality.",
            "Immerse yourself in a captivating journey that reflects my creative pursuit and pays homage to the inspiration behind it all, brittanychiang.com"
        ],
        skills: [
            ["React", "TailwindCSS", "HTML & CSS", "JavaScript "]
        ],
        picture: picPro,
    },

    {
        date: "Aug2023",
        title: "Text-based Tic Tac Toe in Python",
        link: "https://github.com/TualekMentha/TicTacToeProject/blob/master/main.py",
        materials: [

            { type: faGithub, link: "https://github.com/TualekMentha/TicTacToeProject/blob/master/main.py" },

        ],
        descriptions: [
            "Create a text-based Tic Tac Toe game in Python, where players can engage in strategic matches using the command line interface."
        ],
        skills: [
            ["Python"]
        ],
        picture: picTic,
    }

]

