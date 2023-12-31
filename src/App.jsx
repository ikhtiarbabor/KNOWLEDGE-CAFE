import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import BlogPost from './Components/BlogPost/BlogPost';
import Bookmark from './Components/Bookmark/Bookmark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import './App.css';
import Modal from './Components/Modal/Modal';
import WebFont from 'webfontloader';
import FAQ from './Components/FAQ/FAQ';
const App = () => {
  const [blogData, setBlogData] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  let [times, setTimes] = useState(0);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Raleway', 'sans-serif'],
      },
    });
  }, []);

  useEffect(() => {
    const url = 'data.json';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);
  const countBlog = (post, id) => {
    const bookObj = bookmark.find((element) => element.id === id);
    if (bookObj) {
      toast.error('Item is already bookmark !', {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      <Header />
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
          <section className='relative sm:hidden md:block bookmark-area'>
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

        {/* FAQ  */}
        <section className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold'>FAQ</h1>
          <FAQ></FAQ>
        </section>
      </main>
    </>
  );
};

export default App;
