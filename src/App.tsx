import React, { FC } from 'react';
import './App.css';
import FileUpload from './components/file-upload';
import Menu from './components/menu-sidebar';

const App: FC = () => {
  return (
    <>
      <Menu />
      <FileUpload />
    </>
  );
};

export default App;
