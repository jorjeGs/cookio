import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../components/Menu';
import Feed from './Feed';
import SearchRecipe from './SearchRecipe';
import Account from './Account';

const Home = () => {

  return (
    <>
      <header className='App-header p-2'>
        <Menu />
      </header>
      <div className='App-body'>
        <Routes>
          <Route path='/' element={<Navigate to='/home/feed' />} />
          <Route path='feed' element={<Feed />} />
          <Route path='search' element={<SearchRecipe />} />
          <Route path='profile' element={<Account />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;