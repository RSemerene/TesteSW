import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAlR1fnPDCWDoOyu7YOk_ESB6zifUZa90c",
    authDomain: "projeto-testesw.firebaseapp.com",
    projectId: "projeto-testesw",
    storageBucket: "projeto-testesw.appspot.com",
    messagingSenderId: "930419471084",
    appId: "1:930419471084:web:1edd76f1d678cf101d6bc9",
    measurementId: "G-P8JWK9RZRB"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;

firebase.firestore().collection('lixo').doc().delete({})

