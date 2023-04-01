import React from 'react';

const FAQ = () => {
  return (
    <>
      <h1>FAQ</h1>
      <div className='collapse'>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-medium'>
          Difference between Props and State
        </div>
        <div className='collapse-content flex'>
          <div className='w-1/2'>
            <h2>State</h2>
            <p></p>
          </div>
          <div className='w-1/2'>
            <h2>Props</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
