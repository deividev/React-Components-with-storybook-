import { render } from '@testing-library/react';
import Icon from '../Icon';

test('Render icon component correctly', async () => {
  const { container } = render(<Icon icon={'cart_shopping'} />);
  expect(container).toBeInTheDocument();
});