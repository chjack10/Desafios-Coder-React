import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5amT9vLgwDWPsBXYKbl8nn6KjyUSG08M',
  authDomain: 'lanus-tech-app.firebaseapp.com',
  projectId: 'lanus-tech-app',
  storageBucket: 'lanus-tech-app.appspot.com',
  messagingSenderId: '1029772617675',
  appId: '1:1029772617675:web:77809b4ef96b9b4ec9f84e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
