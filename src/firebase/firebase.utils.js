import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPIwDMgosTzNXMiQlSA5gzPmM-kr9DQzg",
    authDomain: "crwn-db-24f77.firebaseapp.com",
    projectId: "crwn-db-24f77",
    storageBucket: "crwn-db-24f77.appspot.com",
    messagingSenderId: "335675938363",
    appId: "1:335675938363:web:b3c951f4bb2c18fb68ee1e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;