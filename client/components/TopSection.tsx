import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { getAssetUrl } from '../utils/assetUrl';
import { useRouter } from 'next/navigation';

function TopSection() {
  const router = useRouter();

  return (
    <section className='pb-12 px-10 bg-[#F8F9FA]'>
      <div className='max-w-3xl mx-auto'>
        {/* start new document */}
        <div className='py-4 flex justify-between items-center'>
          <h2 className='text-gray-800 text-base'>Start a new Document</h2>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        {/* Documents */}
        <div className='relative h-52 w-40 border-[1px] hover:border-blue-400 cursor-pointer'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading='lazy' alt='new Doc' src={getAssetUrl('plus.png')} onClick={() => router.push('/create')}/>
          <p className='ml-2 mt-2 text-sm font-semibold text-gray-700'>Blank</p>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
