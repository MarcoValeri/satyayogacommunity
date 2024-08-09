import { useAuth } from "../../../hooks/AuthContext";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import "./AdminNav.scss";

const AdminNav = () => {

    const { currentUser } = useAuth();
    const adminUserEmail = currentUser ? currentUser.email : null;

    return (
        <nav className="admin-nav">
            <div className="admin-nav__container-content">
                <h2 className="p">Hello,<br/>{adminUserEmail}</h2>
            </div>
            <div className="admin-nav__container-menu">
                <ButtonLogout />
            </div>
        </nav>
    )
}

export default AdminNav;