import { useState } from "react";
import toast from "react-hot-toast";
import Buttons from "./component/Buttons";
import { createUserApi } from "../api/Api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmpassword) {
      return toast.error("Please fill in all fields");
    }

    if (password !== confirmpassword) {
      return toast.error("Passwords do not match");
    }

    toast.success(`Thanks for registering, ${name}!`);
 

  try {
    const formData = new FormData();
    formData.append('username', name);
    formData.append('email', email);
    formData.append('password', password);
    const response = await createUserApi(formData);
    if (response.data.success){
      return toast.success(response.data.message)
    }
    return toast.error(response.data.message)
  } catch (err) {
    console.error("Error creating user:", err)
  }
   };

  return (
    <div className="p-5">
      <form onSubmit={submit} className="mt-10 bg-gray-300 p-5 rounded-lg space-y-3">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="block w-full p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full p-2 rounded"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-2 rounded"
        />
        <input
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          placeholder="Confirm Password"
          className="block w-full p-2 rounded"
        />

        {/* Custom button component */}
        <Buttons label="Register" onClick={submit} />
      </form>
    </div>
  );
}

export default Register;
