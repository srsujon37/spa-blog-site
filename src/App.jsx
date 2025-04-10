import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const handleBookmarked = (blog) => {
    setBookmarked([...bookmarked, blog])
  }

  console.log(bookmarked);

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container container mx-auto flex text-center">
        <div className="left-container w-[70%]">
          
          <Blogs handleBookmarked={handleBookmarked}></Blogs>
        </div>
        <div className="right-container  w-[30%] border-2">
            <h1>Reading Time: 0{}</h1>
            <h1>Bookmarked Count : 0{}</h1>

            {
              bookmarked.map((marked) => <p>{marked.title}</p>)
            }

        </div>
      </div>
      
    </>
  )
}

export default App
