import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const handleBookmarked = (blog) => {
    setBookmarked([...bookmarked, blog])
  }

  const [redingCount, setReadingCount] = useState(0);

  const handleMarkedAsRead = (time,id) => {
    const newTime = redingCount + time;
    setReadingCount(newTime)
    handleRemoveFromBookmark(id)
  }
  
  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookmark);
  }

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container container mx-auto flex text-center">
        <div className="left-container w-[70%]">
          
          <Blogs handleBookmarked={handleBookmarked} handleMarkedAsRead={handleMarkedAsRead} ></Blogs>
        </div>
        <div className="right-container  w-[30%] border-2">
            <h1>Reading Time: {redingCount}</h1>
            <h1>Bookmarked Count : {bookmarked.length}</h1>

            {
              bookmarked.map((marked) => <p key={marked.id} className='bg-amber-400 text-xl p-2.5 shadow-2xl m-2 text-white'>{marked.title}</p>)
            }

        </div>
      </div>
      
    </>
  )
}

export default App
