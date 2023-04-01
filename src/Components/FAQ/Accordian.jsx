import React from 'react';

const Accordion = (props) => {
  const { question, heading, heading2, ans1, ans2 } = props.question;
  console.log(props);
  return (
    <div className='collapse'>
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium'>
        <h1 className='bg-slate-400 rounded p-4'>{question}</h1>
      </div>
      <div className='collapse-content'>
        <div className=''>
          <h2>{heading}</h2>
          <p>{ans1}</p>
        </div>
        <div className=''>
          <h2>{heading2}</h2>
          <p>{ans2}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
