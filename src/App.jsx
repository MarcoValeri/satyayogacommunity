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
import AdminClassAdd from "./admin/pages/AdminClassAdd/AdminClassAdd";
import AdminClasses from "./admin/pages/AdminClasses/AdminClasses";

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
                            <Route path="class-add" element={<AdminClassAdd />} />
                            <Route path="classes" element={<AdminClasses />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </ScrollToTop>
        </>
    )
}

export default App;