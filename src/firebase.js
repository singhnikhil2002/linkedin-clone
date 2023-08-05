import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCekVH4txjaOqw51-soYhUz5d0dRlsDneQ",
    authDomain: "linkedin-clone-48052.firebaseapp.com",
    projectId: "linkedin-clone-48052",
    storageBucket: "linkedin-clone-48052.appspot.com",
    messagingSenderId: "196635250712",
    appId: "1:196635250712:web:ae54e56567b188b81df36d",
    measurementId: "G-SJHLP0XWDW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};
