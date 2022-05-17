import { useRouter } from 'next/router';

import Button from 'components/Button';

import styles from './styles.module.css';

const Main = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Насколько хорошо ты помнишь школьную программу?</h1>
        <Button
          size="xlarge"
          className={styles.button}
          onClick={() => router.push('/questions/school-program')}
        >
          Узнать
        </Button>
      </main>
    </div>
  );
};

export default Main;
