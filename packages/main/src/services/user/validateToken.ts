import { API_SIGNUP } from '@/constants/api';
import { postRequest } from '../utils';

export interface ISignupServiceProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
export const validateToken = async (
  token: string
): Promise<{
  token: string;
}> => {
  try {
    const resp = await postRequest(API_SIGNUP, { token: token });
    return { token: resp.data.token };
  } catch (err) {
    throw new Error('signup API call Failed');
  }
};
