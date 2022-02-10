/* eslint-disable camelcase */
import { API_SIGNUP } from '@/constants/api';
import { postRequest } from '../utils';

export interface ISignupServiceProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
export const signupService = async ({
  email,
  firstName,
  lastName,
  password,
}: ISignupServiceProps): Promise<{
  token: string;
}> => {
  try {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    };
    const resp = await postRequest(API_SIGNUP, data);
    return { token: resp.data.token };
  } catch (err) {
    throw new Error('signup API call Failed');
  }
};
