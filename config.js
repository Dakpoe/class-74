import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC-P4cSCd4NyKA5dKYDAnz0VlRqSIo9s4E",
	authDomain: "elibary-c1ac1.firebaseapp.com",
	projectId: "elibary-c1ac1",
	storageBucket: "elibary-c1ac1.appspot.com",
	messagingSenderId: "901583607950",
	appId: "1:901583607950:web:66d986eafc76b7c59891df",
	measurementId: "G-4F6EQMTMX8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
