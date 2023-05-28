import AboutIEEE from "../components/AboutIEEE.jsx"
import BlogCard from "../components/BlogCard.jsx"
import Blog from "../components/Blog_description.js"
import MainAnimation from "../components/MainAnimation.js"
import Our from "../components/Our.jsx"
import '../styles/Home.css'

export const Home = () => {
  return (
    <div>
      <MainAnimation/>
      <AboutIEEE/> 
      <div className="text-white mt-7">
      <Our x={"Blogs"}/>
      </div>
      <div className="blog_container sm:mb-7 mb-0  mt-4 " data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
        {Blog.map(blog => {
          return (<BlogCard img={blog.img}
            title={blog.title}
            date={blog.date}
            content={blog.content}
            link={blog.link}
          />)
        }
        )}
      </div>
    </div>
  )
}

