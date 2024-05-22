// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAELEq1W4w5x0F_qlFhYPdhNT2HGcgbTDA',
  authDomain: 'ai-testing-assistant.firebaseapp.com',
  projectId: 'ai-testing-assistant',
  storageBucket: 'ai-testing-assistant.appspot.com',
  messagingSenderId: '79685137738',
  appId: '1:79685137738:web:0c34b40f8354be234fbdb3',
  measurementId: 'G-JH6GY02HE5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
