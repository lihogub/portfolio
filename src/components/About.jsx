import ExpandIcon from "../assets/expand-icon.svg";

const About = () => (
    <section id="about"
             className="max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex justify-between transition duration-150 ease-in-out"
             data-bs-toggle="collapse"
             role="button"
             href="#collapseAbout"
             aria-expanded="false"
             aria-controls="collapseAbout"
        >
            <p className="block my-2 text-xl tracking-wide font-semibold">
                About me
            </p>
            <img src={ExpandIcon} width="24" alt="expand button"/>
        </div>
        <div className="collapse" id="collapseAbout">
            <div className="mt-1 mb-1 flex justify-between">
                <div className="col-auto">
                    <p className="text-md">
                        Hi! My name is Oleg. I'm junior software engineer and computer science student at university.
                    </p>
                    <p className="mt-2 text-md">
                        I'm programming for 4 years.
                        Last 2 years I'm exploring JVM and writing code in Java / Kotlin.
                    </p>
                    <p className="mt-2 text-md">
                        Interested in designing and building high-load and fault-tolerant backend applications using
                        microservice architecture.
                    </p>
                    <p className="mt-2 text-md">
                        Now I'm improving my skills as a DevOps engineer.
                    </p>
                    <p className="mt-2 text-md">
                        I participate in hackathons as a team-lead.
                        Trying to find myself as a business-analyst.
                        Ready to develop and to present proof-of-concept applications.
                    </p>
                    <p className="mt-2 text-md">
                        My pet-project is social network: from bare-metal to high RPS and high SLA app.
                    </p>
                    <p className="mt-2 text-md">
                        I like to read books about IT and IT-management.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default About;