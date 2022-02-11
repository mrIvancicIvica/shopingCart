import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATDXvnCZj8LVcMmkwXnowVtk_3C4YdS68",
  authDomain: "authshopcart.firebaseapp.com",
  projectId: "authshopcart",
  storageBucket: "authshopcart.appspot.com",
  messagingSenderId: "314381941268",
  appId: "1:314381941268:web:1310988b771c77828f0501",
  measurementId: "G-BCKHBQ0ZF1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
