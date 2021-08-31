import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function index() {
  const route = useRouter();
  useEffect(() => {
    console.log('see ', route);
  }, []);
  return <div>Template</div>;
}
