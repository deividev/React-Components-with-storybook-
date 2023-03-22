

interface TextFieldProps {
   /**
     * Id 
  */
  variant: 'outline' | 'standard';
  /**
     * Id 
  */
  id: string;
  /**
     * Text label display 
  */
  label: string;  
  /**
     * Type input
  */
  type?: 'password' | 'email' | 'number';
  /**
     * Informative text on the input data
  */
  helperText?: string;   
  /**
     * Disabled or no interaction to input
  */
  disabled?: boolean;  
  /**
     * Required or no data to input
  */
  required?: boolean;
  /**
     * Error to the validation input
  */
  error?: boolean;   
};

export const TextField = ({
  variant,
  label,
  id,
  type,
  helperText,
  required,
  error,
  ...props
}: TextFieldProps) => {
  const typeStyles: string = variant ? variant : 'standard';
  return (
    <div className="wrapper">
      <label className={error ? 'error' : ''} htmlFor={id}>{required ? label+'*' : label}</label>
      <input className={['input',  `input__${typeStyles}`, `${error && 'input__error'}`].join(' ')} type={type ? type : "text"} id={id} {...props}></input>
      <div className="wrapper__helper">
        <p className={['helper',  `${error && 'error'}`].join(' ')}>{helperText}</p>
      </div>  
    </div>
  );
}
export default TextField;