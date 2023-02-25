import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc, //retrive document instance
  getDoc, // getting doc data
  setDoc, // setting doc data
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
  const { uid } = userAuth;
  const userDocRef = doc(db, 'users', uid);
  console.log(userDocRef)
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  
  //if user doesnt exist 
  if(!userSnapshot.exists()) {
    // destructure displayName and email props
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //construct a try/ catch block 
    try {
      //setting new user document 
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
