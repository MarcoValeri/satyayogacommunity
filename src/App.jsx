import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./assets/scss/main.scss";

const App = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default App;