import { useEffect, useState } from "react";
import { dbGetClassesOrderByDate } from "../../../db/dbGetClasses";
import { Link } from "react-router-dom";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { formatDateAndTime } from "../../../util/dateAndTime";

import "./AdminClasses.scss";

const AdminClasses = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const classData = await dbGetClassesOrderByDate();
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
                    <h2 className="h2">AdminClasses</h2>
                    <p className="p">Loading...</p>
                </div>
            </AdminMenu>
        )
    }

    if (error) {
        return (
            <AdminMenu>
                <div className="admin-classes">
                    <h2 className="h2">AdminClasses</h2>
                    <p className="p">Something goes wrong...</p>
                </div>
            </AdminMenu>
        )
    }

    return (
        <AdminMenu>
            <div className="admin-classes">
                <h2 className="admin-classes__title h2">Classes</h2>
                {classes.map((singleClass) => {
                    return (
                        <div key={singleClass.id} className="admin-classes__container-class">
                            <p className="p"><strong>Title:</strong> {singleClass.title}</p>
                            <p className="p"><strong>Date:</strong> {formatDateAndTime(singleClass.date)}</p>
                            <p className="p"><strong>Duration:</strong> {singleClass.duration}</p>
                            <p className="p"><strong>Location:</strong> {singleClass.location}</p>
                            <p className="p"><strong>Location map:</strong> {singleClass.locationMap ? singleClass.locationMap : 'Location map not available'}</p>
                            <p className="p"><strong>Teacher:</strong> {singleClass.teacher}</p>
                            <p className="p"><strong>Teacher link:</strong> {singleClass.teacherLink ? singleClass.teacherLink : 'Teacher link not available'}</p>
                            <p className="p"><strong>Booking:</strong> {singleClass.booking}</p>
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