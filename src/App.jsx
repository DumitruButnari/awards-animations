import Hero from "./sections/Hero.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import {NavBar} from "./components/NavBar.jsx";

const App = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <NavBar />
            <Hero />
            <AboutUs />
        </main>
    )
}
export default App
