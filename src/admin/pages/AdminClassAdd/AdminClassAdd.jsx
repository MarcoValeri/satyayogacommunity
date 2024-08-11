import { useState } from "react";
import { useNavigate } from "react-router";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { dbAddClass } from "../../../db/dbAddClass";
import { formSanitiseStringInput } from "../../../util/formValidation";

import "./AdminClassAdd.scss";

const AdminClassAdd = () => {
    const navigate = useNavigate();

    let isFormValid = false;

    const [newClass, setNewClass] = useState({
        title: '',
        date: '',
        duration: '',
        location: '',
        locationMap: '',
        teacher: '',
        teacherLink: '',
        booking: ''
    });
    const [areFormInputsValid, setAreFormInputsValid] = useState([false, false, false, false, false, false]);
    const [formError, setFormError] = useState(false);

    const handleClassTitleChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, title: inputString});
        setAreFormInputsValid(areFormInputsValid => {
            const updatedState = [...areFormInputsValid];
            updatedState[0] = true;
            return updatedState;
        });
    }

    const handleClassDateChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, date: inputString});
        setAreFormInputsValid(areFormInputsValid => {
            const updatedState = [...areFormInputsValid];
            updatedState[1] = true;
            return updatedState;
        });
    }

    const handleClassDurationChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, duration: inputString});
        setAreFormInputsValid(areFormInputsValid => {
            const updatedState = [...areFormInputsValid];
            updatedState[2] = true;
            return updatedState;
        });
    }

    const handleClassLocationChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, location: inputString});
        setAreFormInputsValid(areFormInputsValid => {
            const updatedState = [...areFormInputsValid];
            updatedState[3] = true;
            return updatedState;
        });
    }

    const handleClassLocationMapChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, locationMap: inputString});
    }

    const handleClassTeacherChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, teacher: inputString});
        setAreFormInputsValid(areFormInputsValid => {
            const updatedState = [...areFormInputsValid];
            updatedState[4] = true;
            return updatedState;
        });
    }

    const handleClassTeacherLinkChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, teacherLink: inputString});
    }

    const handleClassBookingChange = e => {
        let inputString = formSanitiseStringInput(e.target.value);
        setNewClass({...newClass, booking: inputString});
        setAreFormInputsValid(areFormInputsValid => {
            const updatedState = [...areFormInputsValid];
            updatedState[5] = true;
            return updatedState;
        });
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        for (let i = 0; i < areFormInputsValid.length; i++) {
            if (areFormInputsValid[i] === true) {
                isFormValid = true;
            } else {
                isFormValid = false;
                break;
            }
        }

        if (isFormValid) {
            dbAddClass(newClass);
            return navigate('/admin/classes')
        } else {
            setFormError(true);
        }
    }

    return (
        <AdminMenu>
            <div className="admin-class-add">
                <h2 className="admin-class-add__title h2">Add a new class</h2>
                <p className="admin-class-add__info p">* field required</p>
                <p className="admin-class-add__error p">{formError && 'Impossible to save this class, please check all the above fields'}</p>
                <form className="admin-class-add__form" onSubmit={handleSubmitForm}>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="class-title"
                            placeholder="Title*"
                            onChange={handleClassTitleChange}
                            required
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="input-text"
                            type="datetime-local"
                            name="class-datetime"
                            onChange={handleClassDateChange}
                            required
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="class-duration"
                            placeholder="Duration*"
                            onChange={handleClassDurationChange}
                            required
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="class-location"
                            placeholder="Location*"
                            onChange={handleClassLocationChange}
                            required
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="url"
                            name="class-location-map"
                            placeholder="Location Map"
                            onChange={handleClassLocationMapChange}
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="class-teacher"
                            placeholder="Teacher*"
                            onChange={handleClassTeacherChange}
                            required
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="text"
                            name="class-teacher-link"
                            placeholder="Teacher link"
                            onChange={handleClassTeacherLinkChange}
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input
                            className="admin-class-add__form-input input-text"
                            type="url"
                            name="class-url"
                            placeholder="Booking link*"
                            onChange={handleClassBookingChange}
                            required
                        />
                    </div>
                    <div className="admin-class-add__container-form-input">
                        <input className="button button__red" type="submit" name="class-add" value="Add a new class" />
                    </div>
                </form>
            </div>
        </AdminMenu>
    )
}

export default AdminClassAdd;