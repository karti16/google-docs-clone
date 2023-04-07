// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCPhWWzPjzoHUMgG3wmx-kTjM5SexuFlsQ',
  authDomain: 'text-editor-739d1.firebaseapp.com',
  projectId: 'text-editor-739d1',
  storageBucket: 'text-editor-739d1.appspot.com',
  messagingSenderId: '135791690331',
  appId: '1:135791690331:web:80bead259955307ca5357e',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase(app);

const auth = firebase.auth();

export { auth };
