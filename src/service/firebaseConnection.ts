import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCj9fywOsfrU1J4MkoQMYw5hxi-ayNBnss",
  authDomain: "call-flow-manager.firebaseapp.com",
  projectId: "call-flow-manager",
  storageBucket: "call-flow-manager.appspot.com",
  messagingSenderId: "342190089502",
  appId: "1:342190089502:web:46af83d8d08ed52796950f",
  measurementId: "G-DJ0452ZFL4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
