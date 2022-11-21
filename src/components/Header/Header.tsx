import React from 'react';
import Search from '../Search/Search';

type HeaderProps = {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setShowAddForm }) => {
  return (
    <div className="header">
      <Search />
      <img onClick={() => setShowAddForm(true)} src="img/add-svgrepo-com.svg" alt="add" />
    </div>
  );
};

export default Header;
