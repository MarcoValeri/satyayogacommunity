import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { formSanitiseStringInput, formEmailValidation, formPasswordValidation } from "../../util/formValidation";

import "./AdminLogin.scss";

const AdminLogin = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [formError, setFormError] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    const handleEmailChnage = e => {
        let sanitisedEmailInput = formSanitiseStringInput(e.target.value);
        if (formEmailValidation(sanitisedEmailInput)) {
            setEmail(sanitisedEmailInput);
        } else {
            setEmailError(true);
        }
    }

    const handlePasswordChange = e => {
        let sanitisedPasswordInput = formSanitiseStringInput(e.target.value);
        if (formPasswordValidation(sanitisedPasswordInput)) {
            setPassword(sanitisedPasswordInput);
        } else {
            setPasswordError(true);
        }
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            return navigate('/admin/dashboard');
        } catch (err) {
            console.log(`Error: ${err}`);
            setFormError(true);
        }

        setIsFormSubmitted(true);

        // TEST
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <Nav />
            <div className="admin-login">
                <div className="admin-login__container-title">
                    <h1 className="h1">Admin Login</h1>
                </div>
                <div className="admin-login__container-form">
                    <form className="admin-login__form" onSubmit={handleSubmitLogin}>
                        <div className="admin-login__form-container-input">
                            <input
                                className="input-text"
                                type="text"
                                name="login-email"
                                placeholder="Email*"
                                onChange={handleEmailChnage}
                                required
                            />
                            <span className="admin-login__form-error p">{(isFormSubmitted && emailError) && 'Email is not valid'}</span>
                        </div>
                        <div className="admin-login__form-container-input">
                            <input
                                className="input-text"
                                type="password"
                                name="login-password"
                                placeholder="Password*"
                                onChange={handlePasswordChange}
                                required />
                            <span className="admin-login__form-error p">{(isFormSubmitted && passwordError) && 'Password is not valid'}</span>
                        </div>
                        <div className="admin-login__form-container-input">
                            <input className="button button__red" type="submit" name="login-submit" value="Login" />
                            <span className="admin-login__form-error p">{formError && 'Credentials are not valid'}</span>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminLogin;