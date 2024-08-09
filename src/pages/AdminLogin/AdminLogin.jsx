import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import formEmailValidation from "../../util/formEmailValidation";
import formPasswordValidation from "../../util/formPasswordValidation";

import "./AdminLogin.scss";

const AdminLogin = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChnage = e => {
        if (formEmailValidation(e.target.value)) {
            setEmail(e.target.value);
        }
    }

    const handlePasswordChange = e => {
        if (formPasswordValidation(e.target.value)) {
            setPassword(e.target.value);
        }
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`OK`);
            return navigate('/');
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    return (
        <>
            <Nav />
            <div className="admin-login">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmitLogin}>
                    <div>
                        <input
                            type="text"
                            name="login-email"
                            placeholder="Email*"
                            onChange={handleEmailChnage}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="login-password"
                            placeholder="Password*"
                            onChange={handlePasswordChange}
                            required />
                    </div>
                    <div>
                        <input type="submit" name="login-submit" />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AdminLogin;