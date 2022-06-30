import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

import { Navbars } from './components/navigation';
import { Home, About, Skills, Experiences, Projects, Contact } from "./components/pages";

function App() {
    if (typeof window === "object") {
        AOS.init();
    }

    return (
        <div className="flex flex-col h-full">
            <Navbars />
            <Home />
            <About />
            <Skills />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
