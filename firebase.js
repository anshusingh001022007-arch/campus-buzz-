import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAw1WIrXcJOxxNEEnp_uKK8muUfAaPFsT8",
  authDomain: "campus-buzz-76452.firebaseapp.com",
  projectId: "campus-buzz-76452",
  storageBucket: "campus-buzz-76452.firebasestorage.app",
  messagingSenderId: "1093037025506",
  appId: "1:1093037025506:web:cc181c40cb1ca40a88d6bb",
  measurementId: "G-XZWGKWW5YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };