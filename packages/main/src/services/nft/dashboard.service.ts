import { API_DASHBOARD_DATA } from '@/constants/api';
import { getRequest } from '../utils';

export interface IDashboardData {
  name: string;
  role: string;
  title: string;
}
export const getDashboardData = async (): Promise<IDashboardData[]> => {
  const { data } = await getRequest(API_DASHBOARD_DATA);
  return data;
};
