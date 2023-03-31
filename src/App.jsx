import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import avatar from './assets/Author 04.png';
import BlogPost from './Components/BlogPost/BlogPost';
import Bookmark from './Components/Bookmark/Bookmark';
import './App.css';

const App = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const url = 'data.json';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <>
      <Header avatar={avatar} />
      <main className='mx-auto max-w-7xl'>
        <div className='grid blog-post'>
          <section>
            {blogData.map((singleData) => (
              <BlogPost blogData={singleData} key={singleData.id}></BlogPost>
            ))}
          </section>
          <section>
            <Bookmark />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
