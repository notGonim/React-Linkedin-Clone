import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyB2qavhH1jlNNOX-9wG40mRO4T6oB-KurU",
    authDomain: "linkedin-clone-20e49.firebaseapp.com",
    projectId: "linkedin-clone-20e49",
    storageBucket: "linkedin-clone-20e49.appspot.com",
    messagingSenderId: "540260168414",
    appId: "1:540260168414:web:eb3a04f91acd2aac44c84f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth } 