import { memo } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

const Spinner = ({ theme, size }) => (
  <div className={cn(styles[size], styles.container)}>
    <svg className={cn({
      [styles.dark]: theme === 'dark',
    }, styles.spinner, styles.spinner_loading)}
    >
      <circle cx="20" cy="20" r="18" />
    </svg>
    <svg className={cn({
      [styles.dark]: theme === 'dark',
    }, styles.spinner)}
    >
      <circle cx="20" cy="20" r="18" />
    </svg>
  </div>
);

export default memo(Spinner);
