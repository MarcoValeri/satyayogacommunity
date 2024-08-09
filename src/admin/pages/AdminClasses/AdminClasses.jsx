import { useEffect, useState } from "react";
import { dbGetClasses } from "../../../db/dbGetClasses";
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

    // TEST
    console.log(`Test`);
    console.log(classes);

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
                <h2>AdminClasses</h2>
                <p>Classes are ready</p>
            </div>
        </AdminMenu>
    )
}

export default AdminClasses;