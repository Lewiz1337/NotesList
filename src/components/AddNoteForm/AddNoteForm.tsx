import React from 'react';

import styles from './AddNoteForm.module.scss';

type AddNoteFormType = {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (body: { title: string; text: string; tags: string[] }) => void;
};

const AddNoteForm: React.FC<AddNoteFormType> = ({ setShowAddForm, onAdd }) => {
  const [title, setTitle] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');
  const [tags, setTags] = React.useState<string>('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (title && text) {
      onAdd({ title: title, text: text, tags: tags.split(' ') });
      setTitle('');
      setText('');
      setShowAddForm(false);
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} action="submit" onSubmit={onSubmit}>
        <input
          required
          className={styles.input}
          id="title"
          type="text"
          placeholder="Введите заголовок..."
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          required
          className={styles.text}
          id="text"
          // type="text"
          placeholder="Заметка..."
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
          }}></textarea>
        <input
          className={styles.input}
          id="tags"
          type="text"
          placeholder="Введите Тэги..."
          value={tags}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTags(e.target.value);
          }}
        />
        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            <img src="img/ok-svgrepo-com.svg" alt="accept-create" />
          </button>
          <button onClick={() => setShowAddForm(false)} className={styles.button} type="submit">
            <img src="img/cross-svgrepo-com.svg" alt="accept-create" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
