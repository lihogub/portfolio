import ContestItem from "./ContestItem";
import ExpandIcon from "../assets/expand-icon.svg";
import CyberGarden15_01 from "../assets/cybergarden15-01.jpg";
import CyberGarden15_02 from "../assets/cybergarden15-02.jpg";
import CyberGarden15_03 from "../assets/cybergarden15-03.jpg";
import CyberGarden14_01 from "../assets/cybergarden14-01.jpg";
import CyberGarden14_02 from "../assets/cybergarden14-02.jpg";
import CyberGarden14_03 from "../assets/cybergarden14-03.jpg";
import vrn_01_01 from "../assets/vrn-01-01.jpg";
import vrn_01_02 from "../assets/vrn-01-02.jpg";
import vrn_01_03 from "../assets/vrn-01-03.jpg";

const Contests = () => (
    <section id="contests"
             className=" max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex justify-between transition duration-150 ease-in-out"
             data-bs-toggle="collapse"
             role="button"
             href="#collapseContests"
             aria-expanded="false"
             aria-controls="collapseContests"
        >
            <p className="block my-2 text-xl tracking-wide font-semibold">
                Contests
            </p>
            <img src={ExpandIcon} width="24" alt="expand button"/>
        </div>
        <div className="collapse" id="collapseContests">
            <hr className="my-2"/>
            <ContestItem
                company="The funnel of innovative startups, Retail, Hackathone"
                date="11/02/2022 - 13/02/2022"
                job="Team-lead, Frontend & DevOps Developer"
                project='Ecological platform for companies and individuals in the industry of separate garbage collection'
                team="5 members: 3 frontend, 2 data science"
                taskList={[
                    "Designed application business-logic.",
                    "Designed application service layer.",
                    "Deployed application using Docker."
                ]}
                technologyList={[
                    "Typescript",
                    "ReactJS, Firebase, Docker",
                    "WebStorm, Postman"
                ]}
                achievementList={[
                    "Second place."
                ]}
                imageList={[
                    vrn_01_01, vrn_01_02, vrn_01_03
                ]}
            />
            <hr className="my-2"/>
            <ContestItem
                company="Cyber Garden XV, Hackathone"
                date="10/12/2021 - 12/12/2021"
                job="Team-lead, Backend Developer"
                project='B2P recommendation solution for big bank of Southern Russia.'
                team="5 members: 3 frontend, 1 backend, 1 data science"
                taskList={[
                    "Designed application business-logic.",
                    "Designed database scheme.",
                    "Normalised source dataset for ORM usage.",
                    "Integrated recommendation algorithms to backend application."
                ]}
                technologyList={[
                    "Kotlin",
                    "Spring Boot 2, Spring Data (Hibernate), Lombok, SwaggerUI, Amazon AWS (EC2, RDS), Docker",
                    "IntelliJ IDEA, Postman, pgAdmin"
                ]}
                achievementList={[
                    "Victory in our case."
                ]}
                imageList={[
                    CyberGarden15_01, CyberGarden15_02, CyberGarden15_03
                ]}
            />
            <hr className="my-2"/>
            <ContestItem
                company="Cyber Garden XIV, Hackathone"
                date="28/05/2021 - 30/05/2021"
                job="Team-lead, Backend Developer"
                project='Dormitory chat application.'
                team="5 members: 3 frontend, 2 backend"
                taskList={[
                    "Designed application business-logic.",
                    "Developed CRUD methods.",
                    "Designed monetization model."
                ]}
                technologyList={[
                    "Java",
                    "Spring Boot 2, Spring Data (Hibernate), Lombok",
                    "IntelliJ IDEA, Postman, pgAdmin"
                ]}
                achievementList={[
                    'Victory in the special nomination "For the cleanest code"',
                    'Victory for the special nomination "For the most thoughtful business-logic"'
                ]}
                imageList={[
                    CyberGarden14_01, CyberGarden14_02, CyberGarden14_03
                ]}
            />
        </div>
    </section>
)

export default Contests;