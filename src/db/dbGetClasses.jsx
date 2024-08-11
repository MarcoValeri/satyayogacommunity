import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const dbGetClasses = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Classes'));
        const classes = [];
        querySnapshot.forEach((doc) => {
            classes.push({ id: doc.id, ...doc.data() });
        });
        return classes;
    } catch (error) {
        console.log(`Error getting documents: ${error}`);
    }
}

export const dbGetClassesOrderByDate = async () => {
    try {
        const classesRef = collection(db, 'Classes');
        const q = query(classesRef, orderBy('date', 'desc'));

        const querySnapshot = await getDocs(q);
        const classes = [];
        querySnapshot.forEach((doc) => {
            classes.push({ id: doc.id, ...doc.data() });
        })
        return classes;
    } catch (error) {
        console.log(`Error getting documents: ${error}`);
    }
}