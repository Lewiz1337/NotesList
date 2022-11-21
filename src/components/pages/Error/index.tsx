import React from 'react';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        Кажется произошла ошибка
        <br />
        <span>😢</span>
      </h3>
      <button onClick={() => window.location.reload()} className={styles.button}>
        Перезапустить страницу
      </button>
    </div>
  );
};
export default Error;
