/**
 * Test scenarios for ThreadInput component
 *
 * - ThreadInput component
 *   - renders ThreadInput component
 *     - should render title input field
 *     - should render category input field
 *     - should render body input field
 *     - should render create thread button
 *   - handles form submission
 *     - should call addThread function with correct arguments on form submission
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import {
  describe, it, expect, vi,
} from 'vitest'; // Import dari vitest
import { BrowserRouter as Router } from 'react-router-dom';
import ThreadInput from './ThreadInput';

describe('ThreadInput', () => {
  it('renders ThreadInput component', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <Router>
        <ThreadInput addThread={() => {}} />
      </Router>,
    );
    expect(getByLabelText(/Title/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Title/i)).toBeInTheDocument();
    expect(getByLabelText(/Category/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Category/i)).toBeInTheDocument();
    expect(getByLabelText(/Message Body/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Body/i)).toBeInTheDocument();
    expect(getByText(/Create Thread/i)).toBeInTheDocument();
  });

  it('handles form submission', () => {
    const addThreadMock = vi.fn();
    const { getByLabelText, getByText } = render(
      <Router>
        <ThreadInput addThread={addThreadMock} />
      </Router>,
    );
    const titleInput = getByLabelText(/Title/i);
    const categoryInput = getByLabelText(/Category/i);
    const bodyInput = getByLabelText(/Message Body/i);
    const submitButton = getByText(/Create Thread/i);

    fireEvent.change(titleInput, { target: { value: 'New Thread' } });
    fireEvent.change(categoryInput, { target: { value: 'General' } });
    fireEvent.change(bodyInput, { target: { value: 'This is a new thread.' } });
    fireEvent.click(submitButton);

    expect(addThreadMock).toHaveBeenCalledWith({
      title: 'New Thread',
      body: 'This is a new thread.',
      category: 'General',
    });
  });
});
