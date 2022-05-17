import { memo } from 'react';
import cn from 'classnames';

import Spinner from 'components/Spinner';

import styles from './styles.module.css';

const Button = ({
  children, onClick, type, size, loading, className,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      {
        [styles.loading]: loading,
      },
      styles.button,
      styles[type],
      styles[size],
      className,
    )}
  >
    {loading
      ? <Spinner theme="dark" size="s" />
      : <span className={styles.value}>{children}</span>}
  </button>
);

export default memo(Button);
