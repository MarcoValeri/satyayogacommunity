import { collection, getDocs } from "firebase/firestore";
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