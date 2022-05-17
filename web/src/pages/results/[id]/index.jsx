import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Spinner from 'components/Spinner';
import Button from 'components/Button';

import constants from 'constants';

import styles from './styles.module.css';

const Results = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: axiosData } = await axios.get(`http://localhost:3001/questionnaires/${id}`);
        if (data) setData(axiosData);
        setLoading(false);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (Object.keys(data).length === 0) {
    return <div className={styles.container}>Результат не найден </div>;
  }

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading
        ? <Spinner size="l" />
        : error
          ? <div>{error.message}</div>
          : data && (
            <div>
              <h1>
                Поздравляем,
                {' '}
                {data.userName}
                !
              </h1>
              <h2 className={styles.description}>
                Вы прошли тест &quot;
                {constants[data.questionnaireName]}
                &quot;
                успешно на
                {' '}
                {data.result.score * 100}
                %
              </h2>
              <p>
                Правильных ответов:
                {' '}
                {data.result.correct}
              </p>
              <p>
                Неправильных ответов:
                {' '}
                {data.result.wrong}
              </p>
              <Button
                className={styles.button}
                onClick={() => router.push('/')}
              >
                На главную
              </Button>
            </div>
          )}
    </div>
  );
};

export default Results;
