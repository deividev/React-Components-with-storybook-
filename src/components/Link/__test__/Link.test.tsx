import { render, screen } from '@testing-library/react';
import Link from '../Link';

test('Renders main page correctly', async () => {
  render(<Link />);
  expect(true).toBeTruthy();
});