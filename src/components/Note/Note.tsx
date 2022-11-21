import React from 'react';
import styles from './Note.module.scss';
import { noteType } from '../../types';
import uuid from 'react-uuid';
import { Context } from '../../utils/context';

const Note: React.FC<noteType> = ({ text, title, tags, id }) => {
  const { setSearch, setSearchState, onEdit, onDelete } = React.useContext(Context);
  const [edit, setEdit] = React.useState(false);

  const [titleState, setTitleState] = React.useState<string>(title);
  const [textState, setTextState] = React.useState<string>(text);
  const [tagsStateInput, setTagStateInput] = React.useState<string>(tags.join(' '));

  const onHandleDelete = (id: string) => {
    if (id && onDelete) {
      onDelete(id);
    }
  };

  const onAcceptEdit = (id: string) => {
    if (onEdit) {
      if (textState !== text || titleState !== title || tagsStateInput !== tags.join(' ')) {
        onEdit(id, { title: titleState, text: textState, tags: tagsStateInput.split(' ') });
      }
      setTagStateInput(tags.join(' '));
      setEdit(false);
    }
  };

  const onRejectEdit = () => {
    setTitleState(title);
    setTextState(text);
    setEdit(false);
  };

  const onHandleClickTag = (value: string) => {
    if (setSearch) {
      setSearch(value);
      setSearchState(value);
    }
  };

  const findTags = (note: string) => {
    let arr = note.split(' ');

    return (
      <span className={styles.text}>
        {arr.map((item) => {
          return item[0] === '#' ? (
            <span
              onClick={() => {
                onHandleClickTag(item.slice(1));
              }}
              style={{ color: 'red' }}
              className={styles.tag__item}>
              {item.slice(1) + ' '}
            </span>
          ) : (
            item + ' '
          );
        })}
      </span>
    );
  };

  return (
    <li className={styles.root}>
      <div className={styles.note__header}>
        {edit ? (
          <input
            type="text"
            className={styles.title}
            value={titleState}
            onChange={(e) => setTitleState(e.target.value)}></input>
        ) : (
          <h6 className={styles.title}>{title}</h6>
        )}
        <div className={styles.images}>
          {edit ? (
            <>
              <img
                onClick={() => onAcceptEdit(id)}
                src="img/ok-svgrepo-com.svg"
                alt="accept-edit"
              />
              <img
                onClick={() => onRejectEdit()}
                src="img/cross-svgrepo-com.svg"
                alt="reject-edit"
              />
            </>
          ) : (
            <>
              <img onClick={() => setEdit(!edit)} src="img/edit-svgrepo-com.svg" alt="edit" />
              <img
                onClick={() => onHandleDelete(id)}
                src="img/delete-svgrepo-com.svg"
                alt="delete"
              />
            </>
          )}
        </div>
      </div>
      {edit ? (
        <textarea
          className={styles.text}
          value={textState}
          onChange={(e) => {
            setTextState(e.target.value);
          }}></textarea>
      ) : (
        <p className={styles.text}>{findTags(text)}</p>
      )}
      {edit && (
        <>
          <label htmlFor="tagInput">Введите тэги</label>
          <input
            id="tagInput"
            type="text"
            value={tagsStateInput}
            onChange={(e) => setTagStateInput(e.target.value)}
            className={styles.tags}
          />
        </>
      )}
      <div className={styles.tags}>
        {tags.map((item) => {
          if (!item) return null;
          return (
            <span
              onClick={() => {
                onHandleClickTag(item);
              }}
              key={uuid()}
              className={styles.tag}>
              {item}
            </span>
          );
        })}
      </div>
    </li>
  );
};
export default Note;
