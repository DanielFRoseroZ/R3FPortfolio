import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
    const { children } = props;

    return (
        <motion.section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
            initial = {{
                opacity: 0,
                y:50,
            }}
            whileInView={{
                opacity: 1,
                y:0,
                transition: {
                    duration: 0.7,
                    delay: 0.5,
                }
            }}
        >
            {children}
        </motion.section>
    )
}

export const Interface = (props) => {
    const { setSection } = props;

    return (
        <div className="flex flex-col items-center w-screen">
            <AboutMeSection setSection={setSection} />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

//SECCION ABOUT ME

const AboutMeSection = (props) => {
    const { setSection } = props;

    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm <span className="px-1 italic text-green-500">Daniel</span>
            </h1>
            <motion.p className="text-lg text-gray-600 mt-4"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y:0,
                }}
                transition={{
                    duration: 0.7,
                    delay: 1,
                }}
            >
                A full stack web-developer with a passion for
                <br />
                learning and creating.
            </motion.p>
            <motion.button 
                onClick={() => setSection(3)}
                className={`bg-blue-700 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y:0,
                }}
                transition={{
                    duration: 0.7,
                    delay: 1.5,
                }}
            >
                Contact Me
            </motion.button>
        </Section>
    )
}

//SECCION SKILLS

//DICCIONARIO DE HABILIDADES CON SUS RESPECTIVOS NIVELES
const skills = [
    {
        title: "HTML",
        level: 80,
    },
    {
        title: "CSS",
        level: 50,
    },
    {
        title: "JavaScript",
        level: 60,
    },
    {
        title: "React",
        level: 50,
    },
    {
        title: "React Three Fiber",
        level: 40,
    },
    {
        title: "Node.js",
        level: 20,
    },
    {
        title: "Python",
        level: 60,
    },
    {
        title: "Django",
        level: 60,
    },
    {
        title: "SQL",
        level: 60,
    },
    {
        title: "MongoDB",
        level: 30,
    },
];

//DICCIONARIO DE LENGUAJES CON SUS RESPECTIVOS NIVELES
const lenguages = [
    {
     title: "Spanish",
     level: 100,
    },
   {
    title: "English",
    level: 75,
   } 
];

const SkillsSection = () => {
    return (
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className=" mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-xl font-bold" text-gray-800
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition:{
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        }
                                    }
                                }}
                            >{skill.title}</motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-green-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition:{
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            }
                                        }
                                    }}

                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl font-bold mt-10">Languages</h2>
                    <div className=" mt-8 space-y-4">
                        {lenguages.map((lenguage, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3 className="text-xl font-bold" text-gray-800
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition:{
                                                duration: 1,
                                                delay: 2 + index * 0.2,
                                            }
                                        }
                                    }}
                                >{lenguage.title}</motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div
                                        className="h-full bg-green-500 rounded-full"
                                        style={{ width: `${lenguage.level}%` }}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition:{
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}

//SECCION PROYECTOS

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  
    const nextProject = () => {
      setCurrentProject((currentProject + 1) % projects.length);
    };
  
    const previousProject = () => {
      setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };
  
    return (
      <Section>
        <div className="flex w-full h-full gap-8 items-center justify-center">
          <button
            className="hover:text-indigo-600 transition-colors"
            onClick={previousProject}
          >
            ← Previous
          </button>
          <h2 className="text-5xl font-bold">Projects</h2>
          <button
            className="hover:text-indigo-600 transition-colors"
            onClick={nextProject}
          >
            Next →
          </button>
        </div>
      </Section>
    );
  };


const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full border-8">
                <form>
                    <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <label 
                        htmlFor="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <label
                        htmlFor="message"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <button className="bg-green-600 text-white py-4 px-8 rounded-lg font-bold text.lg mt-16">
                        Send
                    </button>
                </form>
            </div>
        </Section>
    )
}