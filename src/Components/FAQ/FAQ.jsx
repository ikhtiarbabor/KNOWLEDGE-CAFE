import React from 'react';
import Accordion from './Accordian';

const FAQ = () => {
  const questionOne = {
    question: 'What is the difference between State and a Props?',
    heading: 'State',
    heading2: 'Props',
    ans1: 'State is a way to pass data around your app. Props are the data that you pass into your component. Props are passed in when you call a component.',
    ans2: 'State is a way to pass data around your app. Props are the data that you pass into your component. Props are passed in when you call a component.',
  };
  const questionTwo = {
    question: 'How Does useState() work?',
    ans1: 'useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.',
  };
  const questionThree = {
    question: 'How Does React work?',
    ans1: 'Wait',
  };
  const questionFour = {
    question: 'What can UseEffect do other than load data?',
    ans1: 'Wait',
  };
  return (
    <>
      <Accordion question={questionOne}></Accordion>
      <Accordion question={questionTwo}></Accordion>
      <Accordion question={questionThree}></Accordion>
      <Accordion question={questionFour}></Accordion>
    </>
  );
};

export default FAQ;
