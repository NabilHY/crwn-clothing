import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc, //retrive document instance
  getDoc, // getting doc data
  setDoc // setting doc data
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsw_tUlTynBpCO724PMbGxZRsMaztOfhE",
  authDomain: "crwn-db-fec7b.firebaseapp.com",
  projectId: "crwn-db-fec7b",
  storageBucket: "crwn-db-fec7b.appspot.com",
  messagingSenderId: "698368632970",
  appId: "1:698368632970:web:80e553ad0711f4b1902573"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const { uid } =  await userAuth;
  const userDocRef = doc(db, 'users', uid);
  const userSnapshot = await getDoc(userDocRef);
  
  //if user doesnt exist 
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try { 
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('Error Createing user', err)
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const authUserWithEmailAndPassword = await createUserWithEmailAndPassword(auth, email, password);
  return authUserWithEmailAndPassword;
}
