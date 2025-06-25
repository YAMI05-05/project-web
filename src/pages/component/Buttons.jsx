import React from 'react'
function Buttons({ label, onClick,  }) {
  return <button onClick={onClick} className= 'bg-red-500 text-white'>{label}
  </button>;  }   

 export default Buttons;