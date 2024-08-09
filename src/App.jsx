import { Outlet, Route, Routes } from "react-router"; 

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import { AuthProvider } from "./hooks/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute/ProtectedRoute";
import AdminDashboard from "./admin/pages/AdminDashboard/AdminDashboard";

import "./assets/scss/main.scss";

const App = () => {

    return (
        <>
            <ScrollToTop>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<AdminLogin />} />
                        <Route path="/admin" element={<ProtectedRoute><Outlet /></ProtectedRoute>} >
                            <Route path="dashboard" element={<AdminDashboard />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </ScrollToTop>
        </>
    )
}

export default App;