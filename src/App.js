import React from 'react';
import './App.css';
import ChatRoom from './components/Chat/Chat'
import SignIn from './components/Login/SignIn';
import Header from './components/Header/Header';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
firebase.initializeApp({
  
  apiKey: "AIzaSyBtl55E2TZjmu6gllCgmYS_-mYm3Hp98Tw",
  authDomain: "chat-system-8b4e1.firebaseapp.com",
  projectId: "chat-system-8b4e1",
  storageBucket: "chat-system-8b4e1.appspot.com",
  messagingSenderId: "728734896607",
  appId: "1:728734896607:web:7cd5be14c0e0516d85b46a",
  measurementId: "G-9MQWSS80Q2"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div >
      <Header auth={auth}/>
     
      <Card className="App" sx={{ minWidth: 275 }}>
        <CardContent>
          <section>
            {user ? <ChatRoom firestore={firestore} auth={auth}/> : <SignIn auth={auth}/>}
          </section>
        </CardContent>
      </Card>
     
    </div>
  );
}
export default App;