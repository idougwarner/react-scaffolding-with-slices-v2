import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import Signup from './index.page';

test('renders signup page', () => {
  render(
    <Provider store={store}>
      <Signup />
    </Provider>
  );
  const linkElement = screen.getByText(/powerful analytics/i);
  expect(linkElement).toBeInTheDocument();
});
