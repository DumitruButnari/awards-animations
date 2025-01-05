import Hero from "./sections/Hero.jsx";
import AboutUs from "./sections/AboutUs.jsx";

const App = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <Hero />
            <AboutUs />
        </main>
    )
}
export default App
