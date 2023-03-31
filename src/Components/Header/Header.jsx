import React from 'react';

const Header = ({ avatar }) => {
  console.log(avatar);
  
  return (
    <header className='text-neutral'>
      <div className='flex justify-between max-w-7xl mx-auto my-8'>
        <div className=''>
          <a href='/index.html'>Cyber Cafe</a>
        </div>
        <div>
          <img src={avatar} alt='' />
        </div>
      </div>
    </header>
  );
};

export default Header;
