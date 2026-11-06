import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

beforeEach(() => {
  axios.get.mockResolvedValue({
    data: [{ id: 1, name: 'Ada Lovelace' }],
  });
});

test('renders the activity button, card, form, counter, and user list', async () => {
  render(<App />);

  expect(screen.getByRole('button', { name: 'Click meeee plssss' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Card' })).toBeInTheDocument();
  expect(screen.getByText('lolo wala na.')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Count: 0' })).toBeInTheDocument();
  expect(await screen.findByText('Ada Lovelace')).toBeInTheDocument();
  await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
});

test('shows confirmation when the activity button is clicked', async () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Click meeee plssss' }));
  expect(await screen.findByText('Ada Lovelace')).toBeInTheDocument();
  await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

  expect(alertSpy).toHaveBeenCalledWith('Button clicked!');
  expect(screen.getByText('Button clicked!')).toBeInTheDocument();
  alertSpy.mockRestore();
});
