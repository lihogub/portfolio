import './App.css';
import Header from "./components/Header";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contests from "./components/Contests";
import Skills from "./components/Skills";
import About from "./components/About";
import Books from "./components/Books";


const App = () => (
    <>
        <Header/>
        <Contacts/>
        <About/>
        <Books/>
        <Skills/>
        <Contests/>
        <Experience/>
        <Education/>
        <Languages/>
        <Footer/>
    </>
)

export default App;
