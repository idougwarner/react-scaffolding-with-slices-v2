export interface User {
  email: string;
  name: string;
}

export type UserState = {
  user: User;
  token: string | null;
  isAuthenticated: boolean;
  status: string;
};
