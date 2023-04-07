import dynamic from 'next/dynamic'
import CreateHeader from '@/components/CreateHeader';
const DynamicEditor = dynamic(() => import('@/components/Editor'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})
function Create() {
  return (
    <div>
      <CreateHeader />
      <DynamicEditor />
    </div>
  );
}

export default Create;
