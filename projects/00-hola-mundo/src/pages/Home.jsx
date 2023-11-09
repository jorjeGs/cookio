import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../components/Menu';
import Feed from './Feed';
import SearchRecipe from './SearchRecipe';
import Account from './Account';
import { useUser } from '../hooks/UserContext';

const Home = () => {
  const { user } = useUser();
  return (
    <>
      <header className='App-header p-2'>
        <Menu />
      </header>
      <div className='App-body'>
        <Routes>
          <Route path='feed' element={<Feed user={user} />} />
          <Route path='search' element={<SearchRecipe user={user}/>} />
          <Route path='profile' element={<Account user={user} />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;