import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Login from '..';

describe('<Login/>', () => {
  it('should render correctly', async () => {
    render(<Login onChange={jest.fn()} onSubmit={jest.fn()} loading={false} />);
    const form = await screen.findByTestId('login-form');
    await waitFor(() => expect(form).toBeInTheDocument());
  });
});
