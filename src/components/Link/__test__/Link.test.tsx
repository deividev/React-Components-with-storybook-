import { render, screen } from '@testing-library/react';
import Link from '../Link';

test('Renders main page correctly', async () => {
  const { container } =render(<Link />);
  expect(container).toBeInTheDocument()
});