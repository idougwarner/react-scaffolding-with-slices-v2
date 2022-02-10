import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const ButtonStyled = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${COLORS.BLACK_100};
  color: ${COLORS.WHITE_100};
  border-radius: 6px;

  &:disabled {
    background-color: ${COLORS.GREY_90};
    cursor: not-allowed;
  }
`;
