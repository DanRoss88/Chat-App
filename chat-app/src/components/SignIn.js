import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase.config'
 
function SignIn() {
    const signInWithGoogle = () => {
        signInWithPopup(auth,provider)
        };
    return (
        <div className='sign-in-container'>
           <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default SignIn