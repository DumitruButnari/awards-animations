import Hero from "./sections/Hero.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import {NavBar} from "./components/NavBar.jsx";
import Features from "./sections/Features.jsx";

const App = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <NavBar />
            <Hero />
            <AboutUs />
            <Features />
        </main>
    )
}
export default App
