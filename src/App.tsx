import React from 'react';

import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import EmptyNote from './components/pages/EmptyNote';

import { noteType } from './types';
import { Context } from './utils/context';
import { getAllNotes, deleteNote, postNote, editNote } from './services/http';

import './scss/App.scss';

function App() {
  const [notes, setNotes] = React.useState<noteType[]>(Array(6));
  const [searchState, setSearchState] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [search, setSearch] = React.useState<string>('');
  const [error, setError] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);

  const getAll = () => {
    setError(false);
    setIsLoading(true);
    getAllNotes()
      .then((res) => setNotes(res.data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  };

  React.useEffect(() => {
    getAll();
  }, []);

  const onDelete = async (id: string) => {
    await deleteNote(id)
      .then(() => getAll())
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  const onAdd = async (body: { title: string; text: string; tags: string[] }) => {
    await postNote(body)
      .then(() => getAll())
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  const onEdit = async (id: string, body: { title: string; text: string; tags: string[] }) => {
    await editNote(id, body)
      .then(() => getAll())
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  return (
    <Context.Provider
      value={{
        searchState,
        setSearchState,
        search,
        setSearch,
        onEdit,
        onDelete,
      }}>
      <div className="App">
        <Header setShowAddForm={setShowAddForm} />
        {error ? (
          <Error />
        ) : notes.length > 0 || showAddForm ? (
          <Home
            showAddForm={showAddForm}
            onAdd={onAdd}
            setShowAddForm={setShowAddForm}
            isLoading={isLoading}
            search={search}
            notes={notes}
          />
        ) : (
          <EmptyNote setShowAddForm={setShowAddForm} />
        )}
      </div>
    </Context.Provider>
  );
}
export default App;
