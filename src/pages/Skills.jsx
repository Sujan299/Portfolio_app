import React from 'react'
import { Icon } from '@iconify/react'
const frontend = [
    {
        id: 1,
        name: "HTML",
        iconName: "vscode-icons:file-type-html",
    },
    {
        id: 2,
        name: "CSS",
        iconName: "vscode-icons:file-type-css2",
    },
    {
        id: 3,
        name: "Bootstrap",
        iconName: "skill-icons:bootstrap",
    },
    {
        id: 4,
        name: "Tailwind",
        iconName: "skill-icons:tailwindcss-dark",
    },
    {
        id: 5,
        name: "JS",
        iconName: "skill-icons:javascript",
    },
    {
        id: 6,
        name: "REACT JS",
        iconName: "skill-icons:react-dark",
    },
];
const backend = [

    {
        id: 1,
        name: "Typescript",
        iconName: "skill-icons:typescript"
    },
    {
        id: 2,
        name: "NODE JS",
        iconName: "skill-icons:nodejs-dark"
    },
    {
        id: 3,
        name: "Express",
        iconName: "skill-icons:expressjs-dark"
    },
];
const database = [
    {
        id: 1,
        name: "MongoDB",
        iconName: "skill-icons:mongodb"
    },
    {
        id: 2,
        name: "Postgress",
        iconName: "skill-icons:postgresql-dark"
    }
];
const others = [
    {
        id: 1,
        name: "Github",
        iconName: "skill-icons:github-dark"
    }
]
const learning = [
    {
        id: 1,
        name: "DSA with JAVA",
        iconName: "skill-icons:java-dark"
    }
]
const FetchSkill = ({skills, field}) => {
    let learning = false;
    if(field === "DSA"){
        learning = true;
    }
    return <div>
        <div className='mx-11 bg-medium_dark h-62 rounded-lg p-4'>
            <h3 className='opacity-50'>{field}</h3>
            <div className={`${learning ? "flex gap-6 my-5 flex-wrap skillsFont" : "gap-3 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 skillsFont text-center"}`}>
                {
                    skills.map((skill) => {
                        return <span key={skill.id} className='bg-primary_dark px-4 rounded-sm py-2'>{skill.name}<Icon icon={skill.iconName} className='inline ml-1 h-4 w-auto' height={24} /></span>
                    })
                }
            </div>
        </div>
    </div>
}
const components = [
    {
        id: 1, 
        name: "Frontend",
        store: frontend
    },{
        id: 2, 
        name: "Backend",
        store: backend
    },{
        id: 3,
        name: "Database",
        store: database
    },{
        id: 4,
        name: "others",
        store: others
    }
];
const Skills = () => {
    return (<>
        <div className='ml-11 mr-11 mb-7 text-2xl text-white text-opacity-100 font-semibold'>What I know</div>
        <div className='grid grid-cols-1 xl:grid-cols-2  gap-6'>
            {
                components.map((comp)=>{
                    return <FetchSkill key={comp.id} skills = {comp.store} field={comp.name}/>
                })
            }
        </div>
        <div className='mb-7'>
            <div className='ml-11 mr-11 my-7 text-2xl text-white text-opacity-100 font-semibold'>What I'm learning...</div>
            <FetchSkill skills = {learning} field="DSA"/>
        </div>
    </>
    )
}
export default Skills