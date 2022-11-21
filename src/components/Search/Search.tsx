import React from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { Context } from '../../utils/context';

const Search: React.FC = () => {
  const { setSearch, searchState, setSearchState } = React.useContext(Context);
  const onChangeCallback = React.useCallback(
    debounce((e: any) => {
      setSearch(e.target.value);
    }, 400),
    [],
  );

  const onChangeInput = (e: any) => {
    setSearchState(e.target.value);
    onChangeCallback(e);
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder="Поиск по тэгу..."
        value={searchState}
        onChange={(e) => {
          onChangeInput(e);
        }}
      />
    </div>
  );
};

export default Search;
