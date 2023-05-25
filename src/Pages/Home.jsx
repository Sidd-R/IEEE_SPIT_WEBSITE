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
      <div className="text-white ">
      <Our x={"Blogs"}/>
      </div>
      <div className="blog_container mb-10">
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

