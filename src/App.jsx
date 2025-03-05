import { Outlet, Route, Routes } from "react-router"; 

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Classes from "./pages/Classes/Classes";
import Contact from "./pages/Contact/Contact";
import Workshop from "./pages/Workshop/Workshop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute/ProtectedRoute";
import AdminDashboard from "./admin/pages/AdminDashboard/AdminDashboard";
import AdminClassAdd from "./admin/pages/AdminClassAdd/AdminClassAdd";
import AdminClasses from "./admin/pages/AdminClasses/AdminClasses";
import AdminClassEdit from "./admin/pages/AdminClassEdit/AdminClassEdit";

import { AuthProvider } from "./hooks/AuthContext";

import "./assets/scss/main.scss";
import AdminClassDelete from "./admin/pages/AdminClassDelete/AdminClassDelete";
import OurProjects from "./pages/OurProjects/OurProjects";

const App = () => {

    return (
        <>
            <ScrollToTop>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/workshop" element={<Workshop />} />
                        <Route path="/our-projects" element={<OurProjects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<AdminLogin />} />
                        <Route path="/admin" element={<ProtectedRoute><Outlet /></ProtectedRoute>} >
                            <Route path="dashboard" element={<AdminDashboard />} />
                            <Route path="class-add" element={<AdminClassAdd />} />
                            <Route path="classes" element={<AdminClasses />} />
                            <Route path="class-edit/:classId" element={<AdminClassEdit />} />
                            <Route path="class-delete/:classId" element={<AdminClassDelete />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </ScrollToTop>
        </>
    )
}

export default App;