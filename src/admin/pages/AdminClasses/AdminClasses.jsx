import { useEffect, useState } from "react";
import { dbGetClasses } from "../../../db/dbGetClasses";
import { Link } from "react-router-dom";
import AdminMenu from "../../components/AdminMenu/AdminMenu";

import "./AdminClasses.scss";

const AdminClasses = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const classData = await dbGetClasses();
                setClasses(classData);
            } catch (err) {
                setError(err);
                console.log(`Error fetching classes: ${err}`);
            } finally {
                setLoading(false);
            }
        }

        fetchClasses();
    }, []);

    if (loading) {
        return (
            <AdminMenu>
                <div className="admin-classes">
                    <h2>AdminClasses</h2>
                    <p>Loading...</p>
                </div>
            </AdminMenu>
        )
    }

    if (error) {
        return (
            <AdminMenu>
                <div className="admin-classes">
                    <h2>AdminClasses</h2>
                    <p>Something goes wrong...</p>
                </div>
            </AdminMenu>
        )
    }

    return (
        <AdminMenu>
            <div className="admin-classes">
                <h2 className="admin-classes__title h2">AdminClasses</h2>
                {classes.map((singleClass) => {
                    return (
                        <div key={singleClass.id} className="admin-classes__container-class">
                            <p className="h4">{singleClass.title}</p>
                            <p className="p">{singleClass.date}</p>
                            <p className="p">{singleClass.teacher}</p>
                            <p className="p">{singleClass.location}</p>
                            <div className="admin-classes__container-class-buttons">
                                <Link className="button button__red" to={`/admin/class-edit/${singleClass.id}`}>edit</Link>
                                <br/>
                                <Link className="button button__red"  to={`/admin/class-delete/${singleClass.id}`}>delete</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </AdminMenu>
    )
}

export default AdminClasses;