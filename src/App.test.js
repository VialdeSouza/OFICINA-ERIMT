import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
 const task =  screen.getAllByTestId('task');

  expect(task.length).toBe(1)
});
