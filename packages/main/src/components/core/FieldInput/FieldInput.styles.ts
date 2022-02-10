import styled from '@emotion/styled';
import { Field } from 'formik';
import { COLORS } from '@/constants/colors';

export const FieldInputStyled = styled(Field)`
  width: 100%;
  border: 1px solid ${COLORS.GREY_90};
  height: 36px;
  padding: 4px 8px;
  border-radius: 6px;
  outline: none;

  &:active,
  &:focus {
    border: 2px solid ${COLORS.BLACK_100};
  }

  &.error {
    border-color: ${COLORS.RED_100};
  }
`;
