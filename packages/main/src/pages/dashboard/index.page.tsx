import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PrivateLayout } from '@/components/Layout';
import Table, { IColumnType } from '@/components/Table';
import { useDashboardData } from '@/hooks/apis/useDashboardData';
import { useAppSelector, useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { validateTokenThunk } from '@/store/user/userSlice';
import { DashboardStyled } from './index.styles';

const columns: IColumnType[] = [
  {
    name: 'Name',
    key: 'name',
  },
  {
    name: 'Title',
    key: 'title',
  },
  {
    name: 'Role',
    key: 'role',
  },
  {
    name: 'Email',
    key: 'email',
  },
];

/**
 *
 * @returns Dashboard with users
 */
const Dashboard = (): JSX.Element => {
  const { data = [], isLoading } = useDashboardData();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!token) router.push('/signup');
    else dispatch(validateTokenThunk(token || ''));
  }, [token]);

  return (
    <PrivateLayout>
      <DashboardStyled>
        <div className="filters" />
        {!isLoading ? <Table columns={columns} data={data} /> : <div className="text-center w-full">Loading...</div>}
      </DashboardStyled>
    </PrivateLayout>
  );
};

export default Dashboard;
