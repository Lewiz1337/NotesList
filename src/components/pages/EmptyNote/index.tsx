import React from 'react';
import styles from './EmptyNote.module.scss';

type EmptyNoteType = {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const EmptyNote: React.FC<EmptyNoteType> = ({ setShowAddForm }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        Кажется у вас нет заметок!
        <br />
        <span>🤨</span>
      </h3>
      <button onClick={() => setShowAddForm(true)} className={styles.button}>
        Создать заметку
      </button>
    </div>
  );
};
export default EmptyNote;
