import { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styles';

interface IButtonProps {
  className?: string;
  type?: 'reset' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

/**
 * Reusable button component
 */
const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
