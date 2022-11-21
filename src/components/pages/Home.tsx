import React from 'react';
import { noteType } from '../../types';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import NoteList from '../NoteList/NoteList';

type HomeProps = {
  showAddForm: boolean;
  onAdd: (body: { title: string; text: string; tags: string[] }) => void;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  search: string;
  notes: noteType[];
};

const Home: React.FC<HomeProps> = ({
  showAddForm,
  onAdd,
  setShowAddForm,
  isLoading,
  search,
  notes,
}) => {
  return (
    <div>
      {showAddForm && <AddNoteForm onAdd={onAdd} setShowAddForm={setShowAddForm} />}
      <NoteList isLoading={isLoading} search={search} notes={notes} />
    </div>
  );
};

export default Home;
