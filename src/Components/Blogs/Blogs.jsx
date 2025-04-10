import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmarked}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch("blogs.json")
            .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])

    // console.log(blogs);
    return (
        <div>
            <h1 className='text-3xl'>Total: {blogs.length}</h1>

            <div className="all-blogs grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-5">
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookmarked={handleBookmarked} ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;