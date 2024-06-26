/**
 * Test scenarios for LoginForm component
 *
 * - LoginForm component
 *   - renders LoginForm component
 *     - should render email input field
 *     - should render password input field
 *     - should render login button
 *   - handles form submission
 *     - should call login function with correct arguments on form submission
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import {
  describe, it, expect, vi,
} from 'vitest'; // Import dari vitest
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders LoginForm component', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(<LoginForm login={() => {}} />);
    expect(getByLabelText(/E-Mail/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(getByText(/Login/i)).toBeInTheDocument();
  });

  it('handles form submission', () => {
    const loginMock = vi.fn();
    const { getByLabelText, getByText } = render(<LoginForm login={loginMock} />);
    const emailInput = getByLabelText(/E-Mail/i);
    const passwordInput = getByLabelText(/Password/i);
    const submitButton = getByText(/Login/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(loginMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
  });
});
