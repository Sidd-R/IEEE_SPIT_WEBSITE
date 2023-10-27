import { useEffect, useState } from 'react';
import AboutIEEE from '../components/AboutIEEE.jsx';
import BlogCard from '../components/BlogCard.jsx';
// import Blog from '../components/Blog_description.js';
import Our from '../components/Our.jsx';
import '../styles/Home.css';
import axios from 'axios';

export const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ieee_spit")
    .then(res => setBlogs(res.data.items))
    .catch(e => console.log(e))
  })
  return (
    <div>
      <div className="mt-10 sm:mt-10 flex flex-col justify-center items-center z-10 text-gray-50 py-20">
        <img
          src={require('../images/ieee_logo.png')}
          style={{ width: '30vh' }}
          alt="IEEE Logo"
        />
        <div className="typewriter mt-4">
          <h1 className="">IEEE SPIT</h1>
        </div>
      </div>
      <AboutIEEE />
      <div className="text-white mt-7">
        <Our x={'Blogs'} />
      </div>
      <div
        className="sm:mb-7 mb-0  mt-4 overflow-auto whitespace-nowrap  grid xl:grid-cols-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 mx-8 sm:mx-20"
        // data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
      >
        {blogs? blogs.map((blog) => {
          return (
            <BlogCard
              img={blog.thumbnail}
              title={blog.title}
              date={blog.pubDate}
              // content={blog.content}
              link={blog.link}
            />
          );
        }): <div>NO BLogs to Show</div>}
      </div>
    </div>
  );
};
