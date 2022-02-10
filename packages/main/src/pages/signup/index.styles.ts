import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const SignupStyled = styled.div`
  height: 100%;
  justify-content: stretch;

  .left-section {
    width: 60%;
    background-color: ${COLORS.INDIGO_100};

    .main-text {
      line-height: 60px;
      font-size: 45px;
      position: absolute;
      top: 40%;
      width: 40%;

      .bold-text {
        font-weight: 700;
      }
    }
  }

  .right-section {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 40%;

    .form-wrapper {
      max-width: 100%;
      margin: auto;
      width: 80%;
    }
  }
`;
