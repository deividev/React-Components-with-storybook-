import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('Render button component correctly', async () => {
  const { container } = render(<Button  />);
  expect(container).toBeInTheDocument()
});