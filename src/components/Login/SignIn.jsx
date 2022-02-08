import React from 'react';
import firebase from 'firebase/compat/app';
import Typography from '@mui/material/Typography';


export default function SignIn(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <Typography varient="p" align="center" sx={{ mt: 2 }} >
          Do not violate the community guidelines or you will be banned for life!
      </Typography>
    </>
  )
}


