import Header from '../components/Header/Header';
import Slidebar from './Slidebar/Slidebar';

import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <Slidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
