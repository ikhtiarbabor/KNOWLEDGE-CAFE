import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Modal = (props) => {
  const addBookmark = props.addBookmark;
  const removeHandler = props.removeHandler;
  let times = props.times;
  return (
    <>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <Bookmark
            addBookmark={addBookmark}
            removeHandler={removeHandler}
            times={times}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
