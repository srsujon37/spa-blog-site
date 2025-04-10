import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handleBookmarked, handleMarkedAsRead}) => {
    return (
        <div className='m-3'>
            {/* <h1>{blog.id}</h1> */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={blog.cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around items-center">
                        <h3>{blog.author}</h3>
                        <img className='w-12' src={blog.author_img} alt="" />
                        <button onClick={() => handleBookmarked(blog)}>
                              <FaBookmark  size={30} />
                        </button>
                        

                    </div>
                    <h2 className="card-title text-green-400">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    <div className='flex font-semibold text-green-700'>
                        {
                            blog.hashtags.map((has)=> <p>{has}</p>)
                        }
                    </div>

                    <div className="card-actions justify-center">
                    <button onClick={()=>handleMarkedAsRead(blog.reading_time)} className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Blog;