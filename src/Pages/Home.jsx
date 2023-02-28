import BlogCard from "../components/BlogCard.jsx"
import Blog from "../components/Blog_description.js"
import '../styles/Home.css'

export const Home = () => {
  return (
    <div className="blog_container">
      {Blog.map(blog => {
          return (<BlogCard img={blog.img}
            title={blog.title}
            date={blog.date}
            content={blog.content}
            link={blog.link}
          />)}
      )}
    </div>
  )
}

