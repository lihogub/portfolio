import ExperienceItem from "./ExperienceItem";
import ExpandIcon from "../assets/expand-icon.svg";

const Experience = () => (
    <section id="experience"
             className="max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex justify-between transition duration-150 ease-in-out"
             data-bs-toggle="collapse"
             role="button"
             href="#collapseExperience"
             aria-expanded="false"
             aria-controls="collapseExperience"
        >
            <p className="block mb-2 text-xl tracking-wide font-semibold">
                Experience
            </p>
            <img src={ExpandIcon} width="24" alt="expand button"/>
        </div>
        <div className="collapse" id="collapseExperience">
            <hr className="my-2"/>
            <ExperienceItem
                company="SimbirSoft, Backend Workshop"
                date="12/2021 - 02/2022"
                job="Backend Developer"
                project='Chat application'
                team="1 member"
                taskList={[
                    "Designed database scheme.",
                    "Wrote source code.",
                    "Designed layered application structure."
                ]}
                technologyList={[
                    "Java",
                    "Spring Boot 2, Spring Data (Hibernate), Spring Security, MapStruct, Lombok, SwaggerUI",
                    "IntelliJ IDEA, Postman, pgAdmin"
                ]}
            />
            <hr className="my-2"/>
            <ExperienceItem
                company="EPAM Systems, Android Internship"
                date="04/2021 - 10/2021"
                job="Android Developer"
                project='"Meal App" - cookbook application'
                team="7 members"
                taskList={[
                    "Wrote source code.",
                    "Fixed bugs.",
                    "Made UI screens.",
                    "Participated in weekly meetings (Scrum)."
                ]}
                technologyList={[
                    "Java, Kotlin",
                    "Dagger2, Retrofit, RxJava2, Room, ViewModel, Navigation Component, LiveData",
                    "Android Studio, Postman, Figma"
                ]}
            />
            <hr className="my-2"/>
            <ExperienceItem
                company="OutVibes Inc., Start-up"
                date="07/2020 - 12/2020"
                job="Backend Developer"
                project="Marketplace platform for sound producers and labels."
                team="Dev Team: 4 members, QA Team: 1 member"
                taskList={[
                    "Designed and coded microservices on Java with Spring Boot 2.",
                    "Implemented stateless authentication protocol JWT for microservices.",
                    "Set up backend deployment on Kubernetes cluster (KaaS).",
                    "Wrote documentation using Swagger."
                ]}
                technologyList={[
                    "Java",
                    "Spring Boot 2, Spring Data (Hibernate), Spring Security (JWT), Amazon (S3, RDS, MQ), RabbitMQ, OpenAPI, Docker, Kubernetes",
                    "IntelliJ IDEA, Postman, pgAdmin"
                ]}
            />
        </div>
    </section>
)

export default Experience;