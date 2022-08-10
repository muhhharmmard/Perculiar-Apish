// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getStorage }  from "@firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_DdKafsONYKFUG1WS2eLCD5FdOlhAEck",
  authDomain: "peculiar-apish.firebaseapp.com",
  projectId: "peculiar-apish",
  storageBucket: "peculiar-apish.appspot.com",
  messagingSenderId: "788853087915",
  appId: "1:788853087915:web:5e9c471e94743a5eaa61ee",
  measurementId: "G-DBHFTBF629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)





