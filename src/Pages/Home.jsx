import BlogCard from "../components/BlogCard.jsx"
import Blog from "../components/Blog_description.js"

export const Home = () => {
  return (
    Blog.map(blog => {

      return (
        <BlogCard img={blog.img}
          title={blog.title}
          date={blog.date}
          content={blog.content}
          link={blog.link}

        />
      )
    })
  )
}

