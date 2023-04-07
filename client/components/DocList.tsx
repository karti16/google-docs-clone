import { IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

function DocList() {
  return (
    <section className='px-10 md:px-0'>
      <div className='max-w-3xl mx-auto text-gray-700'>
        <div className='flex justify-between items-center pb-5'>
          <h2 className='font-medium flex-grow'>My Document</h2>
          <p className='mr-12'>Date created</p>
          <IconButton>
            <FolderIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

export default DocList;
