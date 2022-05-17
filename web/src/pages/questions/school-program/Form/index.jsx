import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Input from 'components/Input';
import Button from 'components/Button';

import styles from './styles.module.css';

const Form = ({ answers }) => {
  const router = useRouter();

  const [error, setError] = useState({});
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!userName) {
      setError({ message: 'Введите имя' });
      return;
    }

    if (!answers || !Object.keys(answers).length) {
      setError({ message: 'Произошла ошибка. Перезагрузите страницу и пройдите опрос еще раз' });
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post('http://localhost:3001/questionnaires', {
        questionnaireName: router.pathname.split('/')[2],
        userName,
        answers,
      });

      if (data && data?._id) {
        router.push(`/results/${data._id}`);
      } else {
        setError({ message: 'Произошла ошибка. Перезагрузите страницу и пройдите опрос еще раз' });
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Введите свое имя для получения результатов</h1>
        <Input
          placeholder="Ваше имя"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={error}
          className={styles.input}
        />
        <Button
          onClick={onSubmit}
          loading={isLoading}
        >
          Получить результаты
        </Button>
      </div>
    </div>
  );
};

export default Form;
