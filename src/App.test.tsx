import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <p>Hello</p>
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
