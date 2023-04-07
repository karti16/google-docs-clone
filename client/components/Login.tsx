import { getAssetUrl } from '@/utils/assetUrl';
import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

function Login() {
  return (
    <div id='__login' className='flex flex-col min-h-screen py-2 justify-center items-center'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading='lazy' src={getAssetUrl('home-logo.png')} alt='home-logo' className='object-cover h-56 w-56' />
      <Button
        variant='contained'
        className="bg-blue-500"
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
