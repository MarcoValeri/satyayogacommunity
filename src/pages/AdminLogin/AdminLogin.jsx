import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

import "./AdminLogin.scss";

const AdminLogin = () => {

    const email = '';
    const password = '';

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`Logged-in ok`);
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    return (
        <>
            <Nav />
            <div className="admin-login">
                <h1>Admin Login</h1>
                <button onClick={handleLogin}>Login</button>
            </div>
            <Footer />
        </>
    )
}

export default AdminLogin;