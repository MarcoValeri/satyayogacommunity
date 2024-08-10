import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import AdminMenu from "../../components/AdminMenu/AdminMenu";

import "./AdminClassDelete.scss";

const AdminClassDelete = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [deleteClass, setDeleteClass] = useState({
        title: '',
        date: '',
        duration: '',
        location: '',
        locationMap: '',
        teacher: '',
        teacherLink: '',
        booking: ''
    });

    useEffect(() => {
        const classRef = doc(db, 'Classes', classId);

        const unsubscribe = onSnapshot(classRef, (doc) => {
            if (doc.exists()) {
                setDeleteClass(doc.data());
                setIsLoading(false);
                console.log(deleteClass);
            }
        });

        return () => unsubscribe();
    }, [classId]);

    const handleClickDelete = async () => {
        try {
            const classRef = doc(db, 'Classes', classId);
            await deleteDoc(classRef);
            console.log(`Class deleted successfully`);
            navigate('/admin/classes');
        } catch (error) {
            console.log(`Error deleting class: ${error}`);
        }
    }

    if (isLoading) {
        return (
            <AdminMenu>
                <div className="admin-class-delete">
                    <h2>Delete this class</h2>
                    <p>Loading....</p>
                </div>
            </AdminMenu>
        )
    }

    return (
        <AdminMenu>
            <div className="admin-class-delete">
                <h2>Delete this class</h2>
                <div>
                    <p>{deleteClass.title}</p>
                </div>
                <button className="button button__red" onClick={handleClickDelete}>Delete</button>
            </div>
        </AdminMenu>
    )
}

export default AdminClassDelete;