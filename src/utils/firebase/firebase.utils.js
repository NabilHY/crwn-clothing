import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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