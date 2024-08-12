import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
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

export const dbGetClassesOrderFromToday = async () => {
    try {
        const classesRef = collection(db, 'Classes');
        const today = new Date();
        console.log(`Today's date: ${today}`);

        const q = query(classesRef, where('date', '>=', today), orderBy('date', 'asc'));

        const querySnapshot = await getDocs(q);
        console.log(`Query snapshot: ${querySnapshot}`);
        
        const classes = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.date = new Date(data.date);
            classes.push({ id: doc.id, ...data });
        })
        return classes;
    } catch (error) {
        console.log(`Error getting documents: ${error}`);
    }
}