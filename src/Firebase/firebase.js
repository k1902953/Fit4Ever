// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB83DcM4dBoNeyWpAMeEYNQGVCWNhgCtLg",
  authDomain: "fitnessapp-login.firebaseapp.com",
  projectId: "fitnessapp-login",
  storageBucket: "fitnessapp-login.appspot.com",
  messagingSenderId: "818961031114",
  appId: "1:818961031114:web:c8643754eadb4c3dc3f933"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
export {auth};