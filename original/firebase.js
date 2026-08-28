// Firebase Config
// Replace these with your Firebase project details

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "123456789",

appId: "1:123456:web:xxxxxxxx"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.database();