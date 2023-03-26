import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc, //retrive document instance
  getDoc, // getting doc data
  setDoc, // setting doc data
  collection,
  writeBatch,
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
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
        ...additionalInfo,
      });
    } catch (err) {
      console.log('Error Createing user', err)
    }
  }
  return userDocRef;
}

export const retrieveUserDocumentFromAuth = async (uid) => {
  const userDocRef = doc(db, 'users', uid);
  const userSnapShot = await getDoc(userDocRef);
  return userSnapShot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const authUserWithEmailAndPassword = await createUserWithEmailAndPassword(auth, email, password);
  return authUserWithEmailAndPassword;
}

export const signInUserWithEmailAndPassword = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  try {
    console.log('Logged in as:', email);
    return response;
  } catch (err) {
    console.error(err.code, err.message);
  }
}

export const logOutUser = async () => {
  return signOut(auth);
}


// declare authStateChange listener functino
// to run a callback function eveytime the state of out auth singleton
//change and updates
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
}