// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD54qehoHM_UdstHAgZu9JHoa3hZ1s2PnQ",
  authDomain: "contact-app-dde08.firebaseapp.com",
  projectId: "contact-app-dde08",
  storageBucket: "contact-app-dde08.firebasestorage.app",
  messagingSenderId: "1029514466563",
  appId: "1:1029514466563:web:1e8c8c56de1a826eb68536"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
