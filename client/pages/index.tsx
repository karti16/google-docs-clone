'use client';
import Head from 'next/head';
import Header from '../components/Header';
import TopSection from '../components/TopSection';
import DocList from '@/components/DocList';
import { useSession, getSession } from 'next-auth/react';
import Login from '@/components/Login';

export default function Home() {
  const { data: session } = useSession();
  console.log('session', session);
  if (!session) {
    return <Login />;
  }

  return (
    <>
      <Head>
        <title>Text Editor</title>
      </Head>
      <Header />
      <TopSection />
      <DocList />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
