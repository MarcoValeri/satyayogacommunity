import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const dbAddClass = async (newClassData) => {
    try {
        const docRef = await addDoc(collection(db, 'Classes'), newClassData);
        console.log(`Document wroitten with ID: ${docRef.id}`);
    } catch (error) {
        console.error(`Error adding document: ${error}`);
    }
}