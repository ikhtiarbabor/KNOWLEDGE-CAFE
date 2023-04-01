import React from 'react';
import bookmarkIcon from '../../assets/bookmark-solid.svg';
const Header = () => {
  return (
    <header className='text-neutral'>
      <div className='flex justify-between max-w-7xl mx-auto md:mb-8 mb-4 items-center'>
        <div className=''>
          <a
            href='/index.html'
            className='md:text-5xl sm:text-3xl bold logo font-loader'
          >
            Cyber Cafe
          </a>
        </div>
        <div className='flex sm:my-2 items-center'>
          <label
            htmlFor='my-modal-3'
            className='sm:block md:hidden  w-9 pr-2 p-2 btn btn-outline hover:bg-white'
          >
            <img src={bookmarkIcon} alt='' className='bg-transparent' />
          </label>
          <img
            src='https://i.postimg.cc/nz4znpsj/Author-04.png'
            alt=''
            className='ml-4'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
