
import  "../../styles/components/button.scss";
import Logo from '../../assets/react.svg';

type StateKeys = "disabled" | "success" | "selected" | undefined;

interface Button {
  /**
    * Text to display inside the button
  */
  text?: string; 
  /**
    * Wich state the button is in - will override any appearance
  */
  state?: StateKeys;
  /**
   * Size space separator
  */
  size: 'small' | 'medium' | 'large';
  /**
    * Type colors
  */
  mode?: 'primary' | 'secondary';
  /**
    * Event click
  */
  onClick?: () => void;
  children?: React.ReactNode
}

export const Button = ({
    mode,
    size,
    children,
    ...props
  }: Button) => {    
    const model = mode ? mode : 'primary'
    return (
      <button className={['btn', `btn__${model}`, `btn__${size}`,].join(' ')} type='button' {...props}>
        {children}
      </button>
    );
  };

export default Button;