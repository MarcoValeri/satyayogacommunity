import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import AdminMenu from "../../components/AdminMenu/AdminMenu";

import "./AdminClassDelete.scss";
import { Link } from "react-router-dom";

const AdminClassDelete = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [flagDelete, setFlagDelete] = useState(false);
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
            }
        });

        return () => unsubscribe();
    }, [classId]);

    const handleCLickConfirmDelete = () => {
        setFlagDelete(true);
    }

    const handleClickDelete = async () => {
        try {
            const classRef = doc(db, 'Classes', classId);
            await deleteDoc(classRef);
            navigate('/admin/classes');
        } catch (error) {
            console.log(`Error deleting class: ${error}`);
        }
    }

    if (isLoading) {
        return (
            <AdminMenu>
                <div className="admin-class-delete">
                    <h2 className="h2">Delete this class</h2>
                    <p className="p">Loading....</p>
                </div>
            </AdminMenu>
        )
    }

    return (
        <AdminMenu>
            <div className="admin-class-delete">
                <h2 className="admin-class-delete__title h2">Delete this class</h2>
                <div className="admin-class-delete__container-class">
                    <h3 className="admin-class-delete__title h3">Do you want to delete this class?</h3>
                    <p className="p">Class title: {deleteClass.title}</p>
                    <p className="p">Class date: {deleteClass.date}</p>
                    <p className="p">Class teacher: {deleteClass.teacher}</p>
                    <p className="p">Class location: {deleteClass.location}</p>
                </div>
                {flagDelete ? (    
                    <div>
                        <div className="admin-class-delete__container-buttons">
                            <Link className="admin-class-delete__link button button__red" to="/admin/classes">Back to classes</Link>
                            <button className="button button__red" onClick={handleClickDelete}>Delete this class forever</button>
                        </div>
                        <div className="admin-class-delete__container-allert">
                            <h4 className="admin-class-delete__allert h4">*** This class and all its data will be removed ***</h4>
                        </div>
                    </div>
                    )
                    :
                    (
                    <div>
                        <div className="admin-class-delete__container-buttons">
                            <button className="button button__red" onClick={handleCLickConfirmDelete}>Yes, delete it</button>
                            <Link className="admin-class-delete__link button button__red" to="/admin/classes">Back to classes</Link>
                        </div>
                    </div>
                )}
            </div>
        </AdminMenu>
    )
}

export default AdminClassDelete;