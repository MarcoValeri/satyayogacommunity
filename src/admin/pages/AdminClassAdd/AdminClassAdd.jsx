import { useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";

import "./AdminClassAdd.scss";
import { dbAddClass } from "../../../db/dbAddClass";

const AdminClassAdd = () => {

    const [classTitle, setClassTitle] = useState();
    const [classDate, setClassDate] = useState();
    const [classDuration, setClassDuration] = useState();
    const [classLocation, setClassLocation] = useState();
    const [classLocationMap, setClassLocationMap] = useState();
    const [classTeacher, setClassTeacher] = useState();
    const [classTeacherLink, setClassTeacherLink] = useState();
    const [classBooking, setClassBooking] = useState();
    const [newClass, setNewClass] = useState({
        title: '',
        date: '',
    });


    const handleClassTitleChange = e => {
        setClassTitle(e.target.value);
        setNewClass({...newClass, title: e.target.value});
        console.log(classTitle);
    }

    const handleClassDateChange = e => {
        setClassDate(e.target.value);
        setNewClass({...newClass, date: e.target.value});
        console.log(classDate);
    }

    const handleClassDurationChange = e => {
        setClassDuration(e.target.value);
        console.log(classDuration);
    }

    const handleClassLocationChange = e => {
        setClassLocation(e.target.value);
        console.log(classLocation);
    }

    const handleClassLocationMapChange = e => {
        setClassLocationMap(e.target.value);
        console.log(classLocationMap);
    }

    const handleClassTeacherChange = e => {
        setClassTeacher(e.target.value);
        console.log(classTeacher);
    }

    const handleClassTeacherLinkChange = e => {
        setClassTeacherLink(e.target.value);
        console.log(classTeacherLink);
    }

    const handleClassBookingChange = e => {
        setClassBooking(e.target.value);
        console.log(classBooking);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(`classTitle: ${classTitle}`);
        console.log(`classDate: ${classDate}`);
        console.log(`classDuration: ${classDuration}`);
        console.log(`classLocation: ${classLocation}`);
        console.log(`classLocationMap: ${classLocationMap}`);
        console.log(`classTeacher: ${classTeacher}`);
        console.log(`classTeacherLink: ${classTeacherLink}`);
        console.log(`classBooking: ${classBooking}`);

        console.log(`newClass: ${newClass}`);
        console.log(newClass.title);
        console.log(newClass.date);

        if (false) {
            dbAddClass(newClass);
        }
    }

    return (
        <AdminMenu>
            <div className="admin-class-add">
                <h2 className="h2">Add new class</h2>
                <form onSubmit={handleSubmitForm}>
                    <div>
                        <input
                            type="text"
                            name="class-title"
                            placeholder="Title*"
                            onChange={handleClassTitleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="datetime-local"
                            name="class-datetime"
                            onChange={handleClassDateChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="class-duration"
                            placeholder="Duration*"
                            onChange={handleClassDurationChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="class-location"
                            placeholder="Location*"
                            onChange={handleClassLocationChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            name="class-location-map"
                            placeholder="Location Map"
                            onChange={handleClassLocationMapChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="class-teacher"
                            placeholder="Teacher*"
                            onChange={handleClassTeacherChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="class-teacher-link"
                            placeholder="Teacher link"
                            onChange={handleClassTeacherLinkChange}
                        />
                    </div>
                    <div>
                        <input
                            type="url"
                            name="class-url"
                            placeholder="Booking link*"
                            onChange={handleClassBookingChange}
                            required
                        />
                    </div>
                    <div>
                        <input type="submit" name="class-add" value="Add a new class" />
                    </div>
                </form>
            </div>
        </AdminMenu>
    )
}

export default AdminClassAdd;