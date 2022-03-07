const Contacts = () => (
    <section id="contacts" className="max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <p className="block mb-2 text-xl tracking-wide font-semibold">Contacts</p>
        <hr/>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <table className="mt-2">
                <tr>
                    <td className="text-gray-500 w-24">Address:</td>
                    <td>Russia, Krasnodar</td>
                </tr>
                <tr>
                    <td className="text-gray-500">VK:</td>
                    <td><a className="text-blue-700" href="https://vk.com/lihogub.oleg">@lihogub.oleg</a></td>
                </tr>
                <tr>
                    <td className="text-gray-500 w-24">Instagram:</td>
                    <td><a className="text-blue-700" href="https://www.instagram.com/lihogub.oleg/">@lihogub.oleg</a></td>
                </tr>
            </table>
            <table className="md:mt-2">
                <tr>
                    <td className="text-gray-500">GitHub:</td>
                    <td><a className="text-blue-700" href="https://github.com/lihogub">@lihogub</a></td>
                </tr>
                <tr>
                    <td className="text-gray-500">LinkedIn:</td>
                    <td><a className="text-blue-700" href="https://linkedin.com/in/lihogub/">@lihogub</a></td>
                </tr>
                <tr>
                    <td className="text-gray-500 w-24">Telegram:</td>
                    <td><a className="text-blue-700" href="https://t.me/lihogub">@lihogub</a></td>
                </tr>
            </table>
        </div>
    </section>
)

export default Contacts;