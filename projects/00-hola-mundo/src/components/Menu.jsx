import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/home.svg?react';
import SearchIcon from '../assets/search.svg?react';
import UserIcon from '../assets/user.svg?react';
import ShutDownIcon from '../assets/shutdown.svg?react';
import MenuIcon from '../assets/menu.svg?react';

function onToggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('top-[14%]');
}

const Menu = () => {
    return (
        <nav className='flex justify-between items-center w-[92%] mx-auto h-20'>
            <div className='logo'>
                <a href='/'>
                    <img className='w-16' src='https://unavatar.io/facebook' alt='logo' />
                </a>
            </div>
            <div className='menu nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto md:opacity-100 opacity-100 w-full flex items-center px-5'>
                <ul className='flex md:flex-row flex-col mx-auto md:items-center md:gap-[8vw] gap-8'>
                    <li>
                        <Link to='/'>
                            <HomeIcon fill='white' stroke="green" className='w-16 h-auto' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            <SearchIcon className='w-16 h-auto' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/#'>
                            <UserIcon className='w-16 h-auto' />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='user flex items-center gap-6'>
                <button>
                    <ShutDownIcon className='w-16 h-auto' />
                </button>
                <button onClick={onToggleMenu} className='md:hidden block'>
                    <MenuIcon className='w-16 h-auto' />
                </button>
            </div>
        </nav>
    );
};

export default Menu;