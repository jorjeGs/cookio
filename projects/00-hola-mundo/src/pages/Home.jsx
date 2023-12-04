import {useEffect, React} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from '../components/Menu';
import Feed from './Feed';
import MyRecipes from './MyRecipes';
import CreateRecipe from './CreateRecipe';
import Account from './Account';
import useUser from '../hooks/useUser';
import NotFound from './NotFound';

const Home = () => {
  //updating user info in the context when the component mounts
  const { user, getUserData } = useUser();
  useEffect(() => {
      getUserData(user)
  }, [])


  return (
    <>
      <header className='App-header p-2'>
        <Menu />
      </header>
      <div className='App-body'>
        <Routes>
          <Route index element={<Navigate to='/home/feed' />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/recipes' element={<MyRecipes />} />
          <Route path='/create' element={<CreateRecipe />} />
          <Route path='/profile' element={<Account />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;