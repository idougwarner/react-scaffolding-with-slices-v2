import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { PublicLayout } from '@/components/Layout';
import { RootState } from '@/store';
import SignupForm from '@/modules/SignupForm';
import { SignupStyled } from './index.styles';

/**
 *
 * @returns signup page
 */
const Signup = () => {
  const { token } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (token) router.push('/dashboard');
  }, [token]);

  return (
    <PublicLayout>
      <SignupStyled className="flex h-full items-strech">
        <div className="left-section">
          <p className="main-text text-center">
            The industry's most <span className="bold-text block">powerful analytics</span> are free.
          </p>
        </div>
        <div className="flex right-section">
          <div className="form-wrapper m-auto w-4/5">
            <h1 className="text-center text-xl text-sky-500	mb-4">Create your Account</h1>
            <SignupForm />
          </div>
        </div>
      </SignupStyled>
    </PublicLayout>
  );
};

export default Signup;
