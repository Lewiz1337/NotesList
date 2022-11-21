import React from 'react';
import Note from '../Note/Note';
import uuid from 'react-uuid';
import styles from './NoteList.module.scss';
import { noteType } from '../../types';
import Skeleton from '../Skeleton/Skeleton';

interface NoteProps {
  notes: noteType[];
  search: string;
  isLoading: boolean;
}

const NoteList: React.FC<NoteProps> = ({ notes, search, isLoading }) => {
  return (
    <ul className={styles.root}>
      {notes
        .filter((item) => {
          if (search === '') return true;
          return item.tags.includes(search) ? true : false;
        })
        .map((item, i) => {
          return isLoading ? (
            <Skeleton key={i} className={styles.skeleton} />
          ) : (
            <Note key={uuid()} text={item.text} title={item.title} tags={item.tags} id={item.id} />
          );
        })}
    </ul>
  );
};
export default NoteList;
