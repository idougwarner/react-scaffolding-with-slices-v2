import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

const PrivateLayoutStyled = styled.div`
  header {
    height: 70px;
    background-color: ${COLORS.INDIGO_100};
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;

    p,
    svg {
      margin: 0 20px;
    }
  }

  main {
    top: 70px;
    height: calc(100% - 70px);
    position: absolute;
    width: 100%;
  }
`;

export default PrivateLayoutStyled;
