import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/AuthContext";

import "./ButtonLogout.scss";

const ButtonLogout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.log(`Error loggin out: ${error}`);
        }
    }

    return (
        <button className="button button__red" onClick={handleLogout}>Logout</button>
    )
}

export default ButtonLogout;