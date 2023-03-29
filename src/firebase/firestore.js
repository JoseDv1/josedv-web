import {
	getFirestore,
	collection,
	doc,
	addDoc,
	getDocs,
	getDoc,
	updateDoc,
	deleteDoc,
	where,
	query
} from 'firebase/firestore';
import { app } from './app.js';

export const db = getFirestore(app);

export const WriteToCollection = async (collectionName, data) => {
	try {
		const collectionRef = collection(db, collectionName);
		const docRef = await addDoc(collectionRef, data);

		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const ReadFromCollection = async (collectionName) => {
	try {
		const collectionRef = collection(db, collectionName);
		const snapshot = await getDocs(collectionRef);

		// Return the data as an array with the document ID
		return snapshot.docs.map((doc) => {
			return { id: doc.id, ...doc.data() };
		});
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const ReadFromCollectionWhere = async (collectionName, field, value) => {
	try {
		const collectionRef = collection(db, collectionName);
		const q = query(collectionRef, where(field, '==', value));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			console.log(doc.id, ' => ', doc.data());
		});
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const ReadDoc = async (collectionName, docId) => {
	try {
		const docRef = doc(db, collectionName, docId);
		const docSnap = await getDoc(docRef);

		// Return the data with the document ID+}
		return { id: docSnap.id, ...docSnap.data() };
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const UpdateDoc = async (collectionName, docId, data) => {
	try {
		const docRef = doc(db, collectionName, docId);
		await updateDoc(docRef, data);
	} catch (e) {
		console.error('Error updating document: ', e);
	}
};

export const DeleteDoc = async (collectionName, docId) => {
	try {
		const docRef = doc(db, collectionName, docId);
		await deleteDoc(docRef);
	} catch (e) {
		console.error('Error deleting document: ', e);
	}
};
