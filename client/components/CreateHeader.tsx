import { Button, IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import { useRouter } from 'next/navigation';

function CreateHeader() {
  const router = useRouter();
  return (
    <header className='flex justify-between p-2 items-center sticky top-0 bg-white z-10'>
      {/* left side */}
      <div className='flex gap-3 flex-grow items-center'>
        <IconButton color='primary' className='h-12 w-12 border-0' onClick={() => router.push('/')}>
          <DescriptionIcon className='text-[40px]' />
        </IconButton>
        <div className='flex-row'>
          <input
            className='text-2xl flex-grow focus-within:border-gray-500 border-2 rounded-md border-transparent hover:border-gray-400 focus:outline-none hover:'
            type='text'
            placeholder='Untitled Document'
          />
          <div className='flex gap-2 text-gray-600'>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Tools</p>
            <p>Extension</p>
            <p>Help</p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <Button
          variant='contained'
          className='hover:bg-[#c2e7ff] bg-[#c2e7ff] text-gray-800 rounded-full hidden md:inline-flex'
        >
          <PeopleIcon className='mr-3' />
          Share
        </Button>
      </div>
    </header>
  );
}

export default CreateHeader;
