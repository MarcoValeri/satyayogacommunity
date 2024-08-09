import { Link } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";

import { MdDashboard } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "./AdminMenu.scss";

const AdminMenu = ({ children }) => {
    return (
        <>
            <AdminNav />
            <div className="admin-menu">
                <div className="admin-menu__container-sidebar">
                    <ul>
                        <li className="admin-menu__sidebar-item">
                            <Link className="admin-menu__sidebar-item-link p link-no-style" to="/admin/dashboard">
                                <MdDashboard className="admin-menu__sidebar-item-icon"/>
                                Dashboard
                            </Link>
                        </li>
                        <li className="admin-menu__sidebar-item">
                            <Link className="admin-menu__sidebar-item-link p link-no-style" to="/admin/classes">
                                <GrYoga className="admin-menu__sidebar-item-icon"/>
                                Classes
                            </Link>
                        </li>
                        <li className="admin-menu__sidebar-item">
                            <Link className="admin-menu__sidebar-item-link p link-no-style" to="/admin/class-add">
                                <TbYoga className="admin-menu__sidebar-item-icon" />
                                Add a class
                            </Link>
                        </li>
                        <li className="admin-menu__sidebar-item">
                            <Link className="admin-menu__sidebar-item-link p link-no-style" to="/">
                            <FaArrowAltCircleRight className="admin-menu__sidebar-item-icon" />
                                Back to the website
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="admin-menu__container-menu">{children}</div>
            </div>
        </>
    )
}

export default AdminMenu;