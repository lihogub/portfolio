const Education = () => (
    <section className="max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <p className="block mb-2 text-xl tracking-wide font-semibold">Education</p>
        <hr/>
        <div className="mt-3 mb-1 flex justify-between">
            <div className="col-auto">
                <p className="font-bold text-lg">Kuban State University</p>
            </div>
            <div>
                <p className="font-semibold text-lg">2019 - 2023</p>
            </div>
        </div>
        <table>
            <tr>
                <td className="text-gray-500 align-top">Degree:</td>
                <td>Bachelor</td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top">Faculty:</td>
                <td>Computer Technology And Applied Mathematics</td>
            </tr>
            <tr>
                <td className="text-gray-500 w-24 align-top">Speciality:</td>
                <td>Mathematical Support and Administration of Information Systems</td>
            </tr>
            <tr>
                <td className="text-gray-500 align-top">Location:</td>
                <td>Russia, Krasnodar</td>
            </tr>
        </table>
    </section>
)

export default Education;