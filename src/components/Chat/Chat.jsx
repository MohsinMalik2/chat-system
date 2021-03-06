
import React, { useRef, useState } from 'react';
import ChatMessage from './ChatMessage'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';

import { useCollectionData } from 'react-firebase-hooks/firestore';



export default function Chat(props) {


   
    const dummy = useRef();
    const messagesRef = props.firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = props.auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue(' ');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={props.auth}/>)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}> Send </button>
  
      </form>
    </>)
}
  
  
 