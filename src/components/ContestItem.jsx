import {Carousel} from "react-responsive-carousel";

const ContestItem = ({company, date, job, project, team, taskList, technologyList, achievementList, imageList}) => (
    <>
        <div className="mt-3 mb-1 md:flex justify-between">
            <div className="col-auto">
                <p className="font-bold text-lg">{company}</p>
            </div>
            <div className="col-auto">
                <p className="font-semibold text-lg md:text-left text-right">{date}</p>
            </div>
        </div>
        <table>
            <tr>
                <td className="text-gray-500 align-top">Job:</td>
                <td>{job}</td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top">Project:</td>
                <td>{project}</td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top">Team:</td>
                <td>{team}</td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top w-28">Tasks:</td>
                <td>
                    <ul className="list-disc ml-4">
                        {taskList.map(task => <li>{task}</li>)}
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top w-28">Technologies:</td>
                <td>
                    <ul className="list-disc ml-4">
                        {technologyList.map(technology => <li>{technology}</li>)}
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top w-28">Achievements:</td>
                <td>
                    <ul className="list-disc ml-4">
                        {achievementList.map(achievement => <li>{achievement}</li>)}
                    </ul>
                </td>
            </tr>
        </table>
        <Carousel className="my-2" dynamicHeight={true} infiniteLoop={true} autoPlay={true} interval={5000}>
            {imageList.map(image => (
                <div>
                    <img src={image} alt="hackathone"/>
                </div>
            ))}
        </Carousel>
    </>
)

export default ContestItem