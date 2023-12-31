import React from 'react';
import bookmarkIcon from '../../assets/bookmark-regular.svg';
import './BlogPost.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogPost = (props) => {
  const { id, authorImage, name, postCover, readTime, blogTitle, postTime } =
    props.blogData;
  const countBlog = props.countBlog;
  const timeCount = props.timeCount;

  return (
    <>
      {/* blog post part */}

      <div className='blog-Post mb-10 p-4 bg-slate-300 rounded'>
        <div className='w-full mb-6 bg-center bg-cover'>
          <img
            src={postCover}
            alt=''
            className='w-full md:h-40 lg:h-96 rounded'
          />
        </div>
        <div className='flex items-center'>
          <div className='w-1/2 flex items-center'>
            <div className=''>
              <img src={authorImage} alt='' />
            </div>
            <div className='justify-items-start ml-2 text-left'>
              <h2 className='font-bold text-xl'>{name}</h2>
              <p>{postTime}</p>
            </div>
          </div>
          <div className='flex items-center text-right justify-end w-1/2'>
            <p>
              <span>{readTime}</span>min read
            </p>
            <button
              onClick={() => countBlog(props.blogData, id)}
              className='btn btn-ghost text-black text-2xl'
            >
              <img src={bookmarkIcon} alt='' className='h-5 w-full' />
            </button>
          </div>
        </div>

        <div>
          <h2 className='text-left sm:text-3xl md:text-4xl font-bold my-4'>
            {blogTitle}
          </h2>
          <p className='text-left'>
            <button
              className=' rounded btn btn-neutral-400 sm:text-xs md:text-xs text-white'
              onClick={() => timeCount(readTime)}
            >
              Mark as read
              <ToastContainer />
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
