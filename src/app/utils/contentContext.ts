import { createContext } from "react"

export interface IProject {
  imageUrl: string,
  title: string,
  desc: string,
  githubLink: string,
  liveLink: string,

  languages: string[],
  toolsAndFrameworks: string[]
}
interface IContextContext {
  slidesArr: string[],
  infoTexts: {
    general: string,
    interests: string
  },
  skillsObj: {
    [ key: string ]: {
      title: string;
      entries: string[];
    }
  },
  projects: IProject[]
}

export const contentContext: IContextContext = {
  slidesArr: [ 'about', 'tech', 'projects' ],

  infoTexts: {
    general: `
      I'm a <b>passionate, curious and logical</b> <b>full-stack developer</b> with an academical background in physics, maths and economics; which gives me a strong foundation in <b>logic, problem-solving and data analysis</b>.
      I have a strong drive to <b>create value with my work</b>; creating, improving or maintaining things that makes the lives of people <b>better</b>, companies <b>more efficient</b> and makes a <b>positive impact</b> on society.
      I know how important <b>good, intuitive UX/UI design</b> is, and I enjoy figuring out how to make applications and webpages easy and intuitive to use, without sacrificing functionality.
      <b>Clean Code</b> is <b>maintainable code</b> which is <b>good code</b>. I swear by Kanban boards and scrum sprints; <b>multitasking kills efficiency</b>.
      Currently I'm working mainly with <b>TypeScript</b> and <b>SQL</b>, but I've also got experience with <b>C#</b>, <b>Python</b>, and <b>MongoDB</b>.
    `,
    interests: `
      <b>Playing and listening to music</b> is a big part of my life. I discovered early on that music had a peculiar power to <b>captivate</b> me, and almost magically <b>change my frame of mind</b>. 
      I <b>sing</b> and play the <b>guitar</b>, and as soon as a new song catches me, I can't wait to <b>make my own version of it</b>. I've played a bit of everything, but <b>the old blues, jazz, soul, and early rock</b> is what <b>speaks directly to my soul</b>.
      I've always found <b>methodical thinking and problem-solving</b> stimulating, which led to maths and physics being my favourite subjects in school. Craft and needlework weren't far behind, as I found <b>planning</b> tasks, <b>calculating</b> measurements and then <b>seeing it all come together</b> satisfying. 
      I like to <b>challenge myself</b> with puzzles, strategy games and logic problems, and I enjoy <b>finding solutions</b> to complex situations and <b>learning from them</b>.    
    `,
  },

  skillsObj: {
    languages: {
      title: "Languages",
      entries: [ 'JavaScript/TypeScript', 'Python', 'C#' ]
    },
    frontEnd: {
      title: "Front End",
      entries: [ 'ReactJS', 'NextJS', 'CSS' ],
    },
    backEnd: {
      title: "Back End",
      entries: [ 'NodeJS', '.NET', 'Express', 'Flask', 'Docker' ]
    },
    database: {
      title: "Database",
      entries: [ 'MongoDB', 'PostgreSQL', 'SQLite' ]
    },
    other: {
      title: "Other",
      entries: [ 'Agile Work Methods', 'AWS Lightsail', 'Netlify', 'Figma', 'Git' ]
    }
  },

  projects: [
    {  
      imageUrl: "https://raw.githubusercontent.com/Gullbra/Node-Module-Remover/main/img/node-modules-remover-1.png",
      title: "Node Modules Remover",
      desc: `
        A python script and .exe for removing node modules.
        Learning new tools, I wrote this to efficiently locate and remove some of my 20+ 250mb+ react/next node modules folders.
        Spartan tKinter GUI.
      `,
      githubLink: "https://github.com/Gullbra/Node-Module-Remover",
      liveLink: "",
    
      languages: [ "Python" ],
      toolsAndFrameworks: [ "tkinter" ]
    },
    {  
      imageUrl: "https://raw.githubusercontent.com/gullbra/RegularExpressions/main/example.png",
      title: "RegExp Tester",
      desc: `
        A simple and quick command line RegExp tester.
        Writing this is how I learned regular expressons for JavaScript, and, by extension, TypeScript.
      `,
      githubLink: "https://github.com/Gullbra/RegularExpressions",
      liveLink: "",
    
      languages: [ "JavaScript" ],
      toolsAndFrameworks: [ "NodeJs" ]
    },
  ]
}

export const ContentContext = createContext<IContextContext>({} as IContextContext)