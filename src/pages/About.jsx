import React, { useState } from 'react'
import Buttons from './component/Buttons'

const About = () => {
  const [liked, setLiked] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='flex align-center justify-center mt-5 gap-4'>

<Buttons label='click me' onClick={()=>  setDarkMode(!darkMode)}/>

        <button 
          onClick={() => setLiked(!liked)} 
          className= {`${liked ? 'bg-red-400 ' : 'bg-blue-300' }p-2 bg-red-300 rounded text-white`}>
          {liked ? "Love ❤️" : "Like 👍"}
        </button>

        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
          {darkMode ? "Light Mode ☀" : "Dark Mode 🌙"}
        </button>
      </div>
      
      {/* Rest of your page content would go here */}
    </div>
  )
}

export default About


