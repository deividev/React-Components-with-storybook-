
import styles from './link.module.scss';

interface Link {
    /**
     * Url redirect
     */
    url: string;
    children?: React.ReactNode
  }

export const Link = ({
    url = '',
    children
  }: Link) => {
    return (
      <a className={styles.link} href={url}>
        {children }
      </a>
    );
  };

export default Link;