import Hero from "./sections/Hero.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import {NavBar} from "./components/NavBar.jsx";
import Features from "./sections/Features.jsx";
import Story from "./sections/Story.jsx";
import Contact from "./sections/Contact.jsx";
import {Footer} from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <NavBar />
            <Hero />
            <AboutUs />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    )
}
export default App
