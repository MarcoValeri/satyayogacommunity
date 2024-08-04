import { Route, Routes } from "react-router";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./assets/scss/main.scss";

const App = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default App;