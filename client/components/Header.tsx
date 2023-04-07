import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { getAssetUrl } from '../utils/assetUrl';
import { useSession, signOut } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();
  console.log(process.env.NODE_ENV);
  return (
    <header className=' flex sticky top-0 z-50 px-4 py-2  shadow-md bg-white justify-between'>
      {/* 2 icons */}
      <div className='flex items-center'>
        <IconButton className='h-12 w-12 border-0 text-xl text-gray-500'>
          <MenuIcon className='' />
        </IconButton>
        <IconButton color='primary' className='h-12 w-12 border-0'>
          <DescriptionIcon className='text-[30px]' />
        </IconButton>
        <a href='' className='ml-2 text-gray-500 text-lg cursor-pointer focus:underline'>
          Docs
        </a>
      </div>

      {/* Search bar */}
      <div className='hidden  mx-5 md:mx-14 md:flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-800 focus-within:shadow-md'>
        {/* <i className='text-lg fas fa-magnifying-glass text-gray-500' /> */}
        <SearchIcon />
        <input className='bg-transparent flex-grow outline-none text-lg px-5' type='text' placeholder='Search' />
      </div>

      {/* 2 Icons */}
      <div className='flex'>
        <IconButton className='h-12 w-12 border-0 text-2xl md:hidden'>
          <SearchIcon />
        </IconButton>
        <IconButton className='h-12 w-12 border-0 text-2xl'>
          <AppsIcon className='' />
        </IconButton>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          loading='lazy'
          // src={getAssetUrl('person.jpg')}
          src={session?.user?.image || getAssetUrl('person.jpg')}
          alt='person'
          className='object-cover cursor-pointer rounded-full h-10 w-10'
          onClick={() => {
            signOut();
          }}
        />
      </div>
    </header>
  );
}

export default Header;
