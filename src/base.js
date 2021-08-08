import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCohEjOZAqZAdbrInocPaaerB4rplX8Fws',
  authDomain: 'very-hot-burgers-483f4.firebaseapp.com',
  databaseURL: 'https://very-hot-burgers-483f4-default-rtdb.firebaseio.com',
  projectId: 'very-hot-burgers-483f4',
  storageBucket: 'very-hot-burgers-483f4.appspot.com',
  messagingSenderId: '259240871650',
  appId: '1:259240871650:web:4e0da64d0ce9391804c0bb',
});
const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
