import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { setCurrentDateAndTime } from "../../../util/dateAndTime";

import "./AdminClassEdit.scss";

const AdminClassEdit = () => {
    const { classId } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [saveAndExit, setSaveAndExit] = useState(false);
    const [saveContinueEdit, setSaveContinueEdit] = useState(false);
    const [dateAndTime, setDateAndTime] = useState()
    const [editClass, setEditClass] = useState({
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
                setEditClass(doc.data());
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [classId]);

    const handleClickSaveAndExit = () => {
        setSaveAndExit(true);
        setSaveContinueEdit(false);
    }

    const handleClickSaveContinueEdit = () => {
        setSaveContinueEdit(true);
        setDateAndTime(setCurrentDateAndTime());
    }

    const handleChange = e => {
        setEditClass({...editClass, [e.target.name]: e.target.value});
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const classRef = doc(db, 'Classes', classId);
            await updateDoc(classRef, editClass);
            
            if (saveAndExit) {
                return navigate('/admin/classes');
            }
        } catch (error) {
            console.log(`Error updating class: ${error}`);
        }
    }

    if (isLoading) {
        return (
            <AdminMenu>
                <div className="admin-class-edit">
                    <h2>Admin Class Edit</h2>
                    <p>Loading...</p>
                </div>
            </AdminMenu>
        )
    }

    return (
        <AdminMenu>
            <div className="admin-class-edit">
                <h2 className="admin-class-edit__title h2">Edit this class</h2>
                <form onSubmit={handleSubmit}>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="title"
                            value={editClass.title}
                            placeholder="Title*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="input-text"
                            type="datetime-local"
                            name="date"
                            value={editClass.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="duration"
                            value={editClass.duration}
                            placeholder="Duration*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="location"
                            value={editClass.location}
                            placeholder="Location*"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="url"
                            name="locationMap"
                            placeholder="Location link"
                            value={editClass.locationMap}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="teacher"
                            placeholder="Teacher*"
                            value={editClass.teacher}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="teacherLink"
                            placeholder="Teacher link"
                            value={editClass.teacherLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="admin-class-edit__form-container-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="url"
                            name="booking"
                            placeholder="Booking url*"
                            value={editClass.booking}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-edit__container-class-buttons">
                        <input className="button button__red" onClick={handleClickSaveContinueEdit} type="submit" name="class-edit" value="Save" />
                        <input className="button button__red" onClick={handleClickSaveAndExit} type="submit" name="class-edit" value="Save and exit" />
                    </div>
                    {saveContinueEdit && (
                        <div className="admin-class-edit__form-container-input admin-class-edit__form-container-save">
                            <p className="admin-class-edit__form-save-message p">Last saved: {dateAndTime}</p>
                        </div>
                    )}
                </form>
            </div>
        </AdminMenu>
    )
}

export default AdminClassEdit;