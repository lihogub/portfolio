import ExpandIcon from "../assets/expand-icon.svg";

const Books = () => (
    <section id="books"
             className="max-w-md mx-auto px-8 py-4 my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex justify-between transition duration-150 ease-in-out"
             data-bs-toggle="collapse"
             role="button"
             href="#collapseBooks"
             aria-expanded="false"
             aria-controls="collapseBooks"
        >
            <p className="block my-2 text-xl tracking-wide font-semibold">
                Books
            </p>
            <img src={ExpandIcon} width="24" alt="expand button"/>
        </div>
        <div className="collapse" id="collapseBooks">
            <div className="mt-1 mb-1 flex justify-between">
                <div className="col-auto">
                    <p className="font-semibold">JVM</p>
                    <div className="ml-4">
                        <li>Dmitry Jemerov, Svetlana Isakova. Kotlin in Action.</li>
                        <li>Felipe Gutierrez. Pro Spring Boot 2.</li>
                        <li>Bruce Eckel. Thinking in Java.</li>
                        <li>Barry A. Burd. Java For Dummies.</li>
                        <li>Herbert Schildt. The Complete Reference.</li>
                    </div>
                    <hr/>
                    <p className="font-semibold">Lifestyle</p>
                    <div className="ml-4">
                        <li>Chad Fowler. Passionate Programmer.</li>
                        <li>Robert C. Martin. The Clean Coder.</li>
                    </div>
                    <hr/>
                    <p className="font-semibold">Management</p>
                    <div className="ml-4">
                        <li>Frederick P. Brooks, Jr. The Mythical Man-Month.</li>
                    </div>
                    <hr/>
                    <p className="font-semibold">Development</p>
                    <div className="ml-4">
                        <li>Kent Beck. Test-driven development. (In progress)</li>
                        <li>Chris Richardson. Microservices Patterns. (In progress)</li>
                        <li>Nemeth, Snyder, Hein, Whaley, Mackin. UNIX and Linux System Administration Book. (In progress)</li>
                        <li>Gamma, Helm, Johnson, Vlissides. Design Patterns: Elements of Reusable Object-Oriented Software.</li>
                        <li>Steve McConnell. Code Complete.</li>
                    </div>
                    <hr/>
                    <p className="font-semibold">Computer Science</p>
                    <div className="ml-4">
                        <li>Antti Laaksonen. Guide to Competitive Programming.</li>
                        <li>Donald Knuth. The Art of Computer Programming. 1-3 volumes.</li>
                        <li>A.V. Stolyarov. Introduction to the profession. 1-4 volumes.</li>
                    </div>
                    <hr/>
                    <p className="font-semibold">Other</p>
                    <div className="ml-4">
                        <li>Bjarne Stroustrup. The C++ Programming Language.</li>
                        <li>Magnus Lie Hetland. Beginning Python: From Novice to Professional.</li>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Books;