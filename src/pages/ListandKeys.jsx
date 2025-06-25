import React, { useState } from 'react'

const ListandKeys = () => {
  const [list, setList]= useState([{id: 1, name:"product1", price: 120}, {id: 1, name:"product2", price: 130 }])
  return (
    <div>
      <ul>
        {list.map((item,index)=> (
          <div className='border border-amber-500 m-4 '>
          <li key={index}>  {item.id}</li>
          <div> {item.name}</div>
          <div> {item.price}</div>

           </div>
        ))}
      </ul>
    </div>
  )
}

export default ListandKeys
