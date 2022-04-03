import ExpandIcon from "../assets/expand-icon.svg";

const Skills = () => (
    <section id="skills"
             className="max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex justify-between transition duration-150 ease-in-out"
             data-bs-toggle="collapse"
             role="button"
             href="#collapseSkills"
             aria-expanded="false"
             aria-controls="collapseSkills"
        >
            <p className="block my-2 text-xl tracking-wide font-semibold">
                Skills
            </p>
            <img src={ExpandIcon} width="24" alt="expand button"/>
        </div>
        <div className="collapse" id="collapseSkills">
            <div className="mt-1 mb-1 flex justify-between">
                <div className="col-auto">
                    <p className="text-lg">Backend</p>
                </div>
            </div>
            <table>
                <tr>
                    <td className="text-gray-500 w-32 align-top">Languages:</td>
                    <td>Java</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Frameworks:</td>
                    <td>Spring Boot 2</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Technologies:</td>
                    <td>Spring Data, OAuth 2.0, Keycloak</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Will learn:</td>
                    <td>WebFlux, Redis</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Architecture:</td>
                    <td>Currently exploring ways of microservice architecture implementation</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Description:</td>
                    <td>I am interested in the development of high-load and fault-tolerant services.</td>
                </tr>
            </table>
            <div className="mt-1 mb-1 flex justify-between">
                <div className="col-auto">
                    <p className="text-lg">Frontend</p>
                </div>
            </div>
            <table>
                <tr>
                    <td className="text-gray-500 w-32 align-top">Languages:</td>
                    <td>JavaScript, TypeScript</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Frameworks:</td>
                    <td>ReactJS</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Technologies:</td>
                    <td>Firebase, Bootstrap, Tailwind</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Description:</td>
                    <td>I used to develop web-apps: at university and at hackathons.</td>
                </tr>
            </table>
            <div className="mt-1 mb-1 flex justify-between">
                <div className="col-auto">
                    <p className="text-lg">DevOps</p>
                </div>
            </div>
            <table>
                <tr>
                    <td className="text-gray-500 w-32 align-top">OS:</td>
                    <td>Linux (basic+ understanding & everyday WSL use)</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">VCS:</td>
                    <td>Git</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Containerization:</td>
                    <td>Docker</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Virtualization:</td>
                    <td>Proxmox VE</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Currently learning:</td>
                    <td>Kubernetes</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Will learn:</td>
                    <td>Terraform, Ansible, Ceph, Jenkins, Prometheus, Grafana, ELK, OpenTracing, Vault</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Description:</td>
                    <td>It's amazing to know how real enterprise applications made from code to prod.</td>
                </tr>
            </table>
            <div className="mt-1 mb-1 flex justify-between">
                <div className="col-auto">
                    <p className="text-lg">DB</p>
                </div>
            </div>
            <table>
                <tr>
                    <td className="text-gray-500 w-32 align-top">DBMS:</td>
                    <td>Oracle (theoretical), PostgreSQL(practical), MongoDB</td>
                </tr>
                <tr>
                    <td className="text-gray-500 align-top">Description:</td>
                    <td>I studied databases as a semester course at university.
                        It was about DDD, relational algebra, normal forms, SQL, Oracle DBMS under the hood.</td>
                </tr>
            </table>
        </div>
    </section>
)

export default Skills;