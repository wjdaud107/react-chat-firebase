import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCgpGUN-k9gWeyJ_xI5y9MGuJxd8jOKibE',
  authDomain: 'fir-chat-638d2.firebaseapp.com',
  databaseURL: '1:402705911601:web:6e1f3e4f335190bb836a10',
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth;
export const database = app.database();
