import hackathoner from "../assets/hackathoner1.jpg";

const Header = () => (
    <header id="header" className="max-w-md mx-auto bg-white rounded-b-xl shadow-md overflow-hidden md:max-w-2xl md:flex md:justify-around">
        <div>
            <img className="h-full w-full object-cover md:h-80 md:w-80 rounded-b-xl" src={hackathoner} alt="hackathone"/>
        </div>
        <div className="py-4 px-8 md:px-8 md:flex md:items-center">
            <div>
                <p className="mb-2 tracking-wide font-bold text-4xl">Lihogub Oleg</p>
                <hr/>
                <p className="mt-2 tracking-wide font-semibold text-xl">Backend Developer, 20 y.o.</p>
            </div>
        </div>
    </header>
)

export default Header;
