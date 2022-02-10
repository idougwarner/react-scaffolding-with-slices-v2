import { ChangeEventHandler } from 'react';
import { FieldInputStyled } from './FieldInput.styles';

export interface IInputProps {
  name: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  type?: string;
}

const FieldInput = ({ className, ...props }: IInputProps) => {
  return <FieldInputStyled {...props} className={`${className}`} />;
};

export default FieldInput;
