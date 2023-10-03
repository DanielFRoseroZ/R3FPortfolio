const Section = (props) => {
    const { children } = props;

    return (
        <section className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center">
            {children}
        </section>
    )
}

export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutMeSection />
            <SkillsSection />
            <Section>
                <h1>Projects</h1>
            </Section>
            <ContactSection />
        </div>
    );
};

const AboutMeSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm <span className="bg-white px-1 italic text-green-500">CronoDan</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
                A full stack web-developer with a passion for
                <br />
                learning and creating.
            </p>
            <button className={`bg-blue-700 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>
                Contact Me
            </button>
        </Section>
    )
}

const skills = [
    {
        title: "HTML",
        level: 90,
    },
    {
        title: "CSS",
        level: 60,
    },
    {
        title: "JavaScript",
        level: 70,
    },
    {
        title: "React",
        level: 60,
    },
    {
        title: "React Three Fiber",
        level: 40,
    },
    {
        title: "Node.js",
        level: 30,
    },
    {
        title: "Python",
        level: 70,
    },
    {
        title: "Django",
        level: 70,
    },
    {
        title: "SQL",
        level: 70,
    },
    {
        title: "MongoDB",
        level: 40,
    },
];


const lenguages = [
    {
     title: "Spanish",
     level: 100,
    },
   {
    title: "English",
    level: 80,
   } 
];

const SkillsSection = () => {
    return (
        <Section>
            <div>
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className=" mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <h3 className="text-xl font-bold" text-gray-800>{skill.title}</h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <div
                                    className="h-full bg-green-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl font-bold mt-10">Lenguages</h2>
                    <div className=" mt-8 space-y-4">
                        {lenguages.map((lenguage, index) => (
                            <div className="w-64" key={index}>
                                <h3 className="text-xl font-bold" text-gray-800>{lenguage.title}</h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <div
                                        className="h-full bg-green-500 rounded-full"
                                        style={{ width: `${lenguage.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}


const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full border-8">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                    />
                    <label 
                        for="email"
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
                        for="message"
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