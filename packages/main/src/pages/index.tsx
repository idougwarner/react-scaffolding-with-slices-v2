import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

/**
 *
 * @returns Landing page
 */
export default function LandingPage() {
  const router = useRouter();
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    router.push(token ? '/dashboard' : '/signup');
  }, []);
  return (
    <Head>
      <title>CPA Dashboard</title>
    </Head>
  );
}
