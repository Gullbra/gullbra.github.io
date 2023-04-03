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
    [key: string]: {
      title: string;
      entries: string[];
    }
  },
  projects: IProject[]
}

export const contentContext: IContextContext = {
  slidesArr: ['about', 'tech', 'projects'],

  infoTexts: {
    general: `
I'm a passionate, curious and logical <b>full-stack developer</b>, with an academical background in physics, maths and economics.
I have a strong drive to <b>create value with my work</b>; creating, improving or maintaining things that makes the lives of people <b>better</b>, companies <b>more efficient</b> and makes a <b>positive impact</b> on society.
I know how important <b>good, intuitive UX/UI design</b> is, and I enjoy figuring out how to make applications and webpages easy and intuitive to use, without sacrificing functionality.
I also love writing <b>readable, stable and maintainable code</b> in the backend. I'm full-stack for a reason.
    `,
    interests: `
Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Sint, autem.
Lorem ipsum dolor sit amet <b>consectetur adipisicing</b> elit. Sint, autem.
Lorem ipsum dolor sit <b>amet consectetur adipisicing</b> elit. Sint, autem.
Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Sint, autem.
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
      desc: 
        "A python script and .exe for removing node modules.\nLearning new tools, " +
        "languages, etc takes time... and space. "+
        "I wrote this to efficiently locate and remove some of my 20+ 250mb+ react/next node modules folders."+"\nSpartan tKinter GUI.",
      githubLink: "https://github.com/Gullbra/Node-Module-Remover",
      liveLink: "",
    
      languages: ["Python"],
      toolsAndFrameworks: ["tkinter"]
    },
    {  
      imageUrl: "https://raw.githubusercontent.com/gullbra/RegularExpressions/main/example.png",
      title: "RegExp Tester",
      desc: "A simple and quick command line RegExp tester.\nWriting this is how I learned regular expressons for JavaScript, and, by extension, TypeScript.",
      githubLink: "https://github.com/Gullbra/RegularExpressions",
      liveLink: "",
    
      languages: ["JavaScript"],
      toolsAndFrameworks: ["NodeJs"]
    },
  ]
}

export const ContentContext = createContext<IContextContext>({} as IContextContext)