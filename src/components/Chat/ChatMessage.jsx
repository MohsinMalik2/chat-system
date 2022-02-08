import React from 'react';

export default function ChatMessage(props) {
    const { text, uid,  } = props.message;
  
    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={ 'https://avatars.githubusercontent.com/u/69287526?v=4'} alt="Profile" />
        <p>{text}</p>
      </div>
    </>)
}