import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Forms = () => {

const [formData, setFormData] = useState({
  name:"", email:"", password:""
})

const handleChange=(e) =>{
  const {name, value}=e.target;
  setFormData(prev=>({
    ...prev,
    [name]:value
  }))
}

const submit = () => {
  alert(formData.name + " " + formData.email + " " + formData.password)
  toast.success(`thanks for your registration ${formData.name}`)
}

  return (
    <div>
       <div>
      <form action="" className='mt-10 bg-gray-300'>
        <input type="text" name="name" value={formData.name} onChange={handleChange}  placeholder='Enter your name' />
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your email' />
        <input type="text" name="password" value={formData.password} onChange={handleChange}  placeholder='Enter your password' />

      <button onClick={submit}>Submit</button>

      </form>
      <p>Live Preview:</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>

    </div>
    </div>
  )
}

export default Forms
