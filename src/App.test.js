import { render, screen } from '@testing-library/react';
import App from './App';


class StubServiceTask {
  async getTasks() {
    return [
      { id: 1, description: "Limpar o quintal", status: "todo" },
      { id: 0, description: "Comprar maçã, banana e tomate", status: "done" },
    ];
  }
}



test('renders learn react link', async () => {
  render(<App service={new StubServiceTask()} />);
 const task = await screen.findAllByTestId('task');
 screen.logTestingPlaygroundURL()
  expect(task.length).toBe(1)
});
