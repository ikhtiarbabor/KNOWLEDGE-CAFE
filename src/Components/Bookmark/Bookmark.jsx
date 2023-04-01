import React from 'react';
const Bookmark = (props) => {
  const addBookmark = props.addBookmark;
  const removeHandler = props.removeHandler;
  let times = props.times;
  return (
    <>
      <div className='text-left sticky top-5 bottom-10'>
        <div>
          <h2 className='bg-slate-400 p-3 rounded mb-2'>
            Spend time on read :{times} min
          </h2>
        </div>
        <div className='bg-slate-400 p-3 rounded'>
          <h3>Bookmarked Blog:{addBookmark.length}</h3>
          <div>
            {addBookmark &&
              addBookmark.map((element) => (
                <div
                  key={element.index}
                  className='flex items-center font-bold rounded bg-white p-3 my-2'
                >
                  <div className='w-1/2 flex items-center'>
                    <img src={element.authorImage} alt='' className='mr-3' />
                    <h2 className='text-xs'>{element.blogTitle}</h2>
                  </div>
                  <div className='sm:w-1/2 text-right'>
                    <button
                      onClick={() => removeHandler(element.id)}
                      className='btn btn-secondary text-xs'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
