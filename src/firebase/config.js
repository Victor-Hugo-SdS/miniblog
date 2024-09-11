import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaD8mu1sv6fk5fcft_swjaZTG34BRMR2k",
  authDomain: "miniblog-2aeae.firebaseapp.com",
  projectId: "miniblog-2aeae",
  storageBucket: "miniblog-2aeae.appspot.com",
  messagingSenderId: "942188534120",
  appId: "1:942188534120:web:331f6f0d2c188dd308dedd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };