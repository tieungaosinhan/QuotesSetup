

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCJEDi5fa69qTJ0iksDy8UeLS5Lw1wirgo",
	authDomain: "tieungaosinhan.firebaseapp.com",
	projectId: "tieungaosinhan",
	storageBucket: "tieungaosinhan.firebasestorage.app",
	messagingSenderId: "159414617772",
	appId: "1:159414617772:web:0a246068fdd8303a4c4109"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db;
