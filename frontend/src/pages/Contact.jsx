import React, { useState } from 'react';
import { Button, TextFields } from './component/Elements'; // Ensure correct export names

const Contact = () => {
  const [liked, setLiked] = useState(false);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='flex flex-col gap-4 p-4 bg-gray-100 rounded-xl w-1/2 mx-auto mt-10 shadow'>
      <h2 className="text-xl font-semibold">Contact Us</h2>
      
      <Button 
        onClick={() => setLiked(!liked)} 
        label={liked ? 'Liked 👍' : 'Click ❤️'} 
      />

      <TextFields 
        placeholder="Enter your name" 
        text="name" 
        onChange={handleInputChange} 
        value={input}
      />

      <p className="text-sm text-gray-600">You typed: {input}</p>
    </div>
  );
};

export default Contact;
