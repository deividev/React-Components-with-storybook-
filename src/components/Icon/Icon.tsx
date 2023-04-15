import { ICONS } from "../../constants/icons";

interface IconProps {
  /**
   * Name Icon to display
   */
  icon: string;
  /**
   * Icon size to display
   */
  size?: number;
  /**
   * Color exadecimal to icon, black deafult
   */
  color?: string;
  /**
   * Event click
   */
  onClick?: () => void;
  /**
   * Class to change styles , focus, hover, fill predominates over the color including default  etc...
   */
  className?: any;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  const { color } = props;
  const iconColor = color ? color : "black";

  return (
    <svg
      data-testid={icon}
      className={props.className}
      onClick={props.onClick}
      width={`${props.size ? props.size : "24"}px`}
      height={`${props.size ? props.size : "24"}px`}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={
          props.className && props.className.fill
            ? props.className.fill
            : iconColor
        }
        d={ICONS[icon]}
      ></path>
    </svg>
  );
};

export default Icon;
