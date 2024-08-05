// components/GoogleSignIn.js
'use client';

import { auth, GoogleAuthProvider } from '@/firebase';
import { signInWithPopup } from 'firebase/auth';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const GoogleSignIn = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/pantry');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleGoogleSignIn}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignIn;
