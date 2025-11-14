import about from '../data/about.json';

const About = () => {
    return (
        <div className="grid md:grid-cols-2 mx-8 gap-8 text-center">
            <div className="card p-4 md:col-span-2">
                <h1>Education</h1>
                <h2>{about.background.education.institution}</h2>
                <p>{about.background.education.degree} - {about.background.education.field}</p>
                <p>{about.background.education.graduationYear}</p>
            </div>
            <div className="card p-4">
                <h1>Technical skills</h1>
                <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
                    {about.skills.technical.map((skill) => (
                        <span className="badge">{skill}</span>
                    ))}
                </div>
            </div>
            <div className="card p-4">
                <h1>Foundational skills</h1>
                <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
                    {about.skills.foundational.map((skill) => (
                        <span className="badge">{skill}</span>
                    ))}
                </div>
            </div>
            <div className="card p-4 md:col-span-2">
                <h1 className="mb-8">Current Focus</h1>
                <h3 className="my-4">{about.currentFocus.statement}</h3>
                <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
                    {about.currentFocus.technologies.map((tech) => (
                        <span className="badge">{tech}</span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export { About }