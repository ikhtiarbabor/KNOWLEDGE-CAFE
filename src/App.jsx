import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import avatar from './assets/Author 04.png';
import BlogPost from './Components/BlogPost/BlogPost';
import Bookmark from './Components/Bookmark/Bookmark';
import swal from 'sweetalert';
import './App.css';
import Modal from './Components/Modal/Modal';
const App = () => {
  const [blogData, setBlogData] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  let [times, setTimes] = useState(0);
  useEffect(() => {
    const url = 'data.json';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);
  const countBlog = (post, id) => {
    const bookObj = bookmark.find((element) => element.id === id);
    if (bookObj) {
      swal('Oops', 'You Already Add On Bookmark', 'error');
      return;
    }
    setBookmark([...bookmark, post]);
  };
  const removeHandler = (id) => {
    const bookObj = bookmark.filter((element) => element.id !== id);
    setBookmark(bookObj);
    swal('Good job!', 'You removed From BookMark!', 'success');
  };
  const timeCount = (time) => {
    setTimes((times = parseInt(times) + parseInt(time)));
  };
  return (
    <>
      <Header avatar={avatar} />
      <main className='mx-auto max-w-7xl'>
        <div className='grid blog-post'>
          <section>
            {blogData.map((singleData) => (
              <BlogPost
                blogData={singleData}
                key={singleData.id}
                countBlog={countBlog}
                timeCount={timeCount}
              ></BlogPost>
            ))}
          </section>
          <section className='relative sm:hidden md:block'>
            <Bookmark
              addBookmark={bookmark}
              removeHandler={removeHandler}
              times={times}
            />
          </section>
        </div>
        <Modal
          addBookmark={bookmark}
          removeHandler={removeHandler}
          times={times}
        ></Modal>
      </main>
    </>
  );
};

export default App;
