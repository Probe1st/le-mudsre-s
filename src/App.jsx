import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { createContext, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './utils/routes';

const app = initializeApp({
  apiKey: "AIzaSyDp45YJT5SHpL5bTXq4Qe2OZT2mTy4mEpw",
  authDomain: "le-mudsre-s.firebaseapp.com",
  projectId: "le-mudsre-s",
  storageBucket: "le-mudsre-s.appspot.com",
  messagingSenderId: "536496312692",
  appId: "1:536496312692:web:04b58f2559914bd45bdc21",
  measurementId: "G-5YPVJWRG1R"
});
const analytics = getAnalytics(app);
const auth = getAuth(app);

const rooter = createBrowserRouter(publicRoutes.push(...privateRoutes));

export const Context = createContext({ app, analytics, auth });

export default function App() {
  const [stateAuth, setStateAuth] = useState(null);

  

  return (
    {
      
    }
  );
}
