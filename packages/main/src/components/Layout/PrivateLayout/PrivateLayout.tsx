import { ReactNode } from 'react';
import { HeaderLogo } from '@/assets/svg/header-logo';
import PrivateLayoutStyled from './PrivateLayout.styles';

const PublicLayout = ({ children, email }: { children: ReactNode; email?: string }): JSX.Element => {
  return (
    <PrivateLayoutStyled>
      <header className="flex justify-between">
        <HeaderLogo />
        <p>
          <span className="cursor-pointer">{email}</span>
        </p>
      </header>
      <main>{children}</main>
    </PrivateLayoutStyled>
  );
};

export default PublicLayout;
