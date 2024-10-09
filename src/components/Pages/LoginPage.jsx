import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className="LoginPage flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-blue-500 text-center">Login Form</h1>
        <p className="text-center">Login with your email and password</p>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
          <div className="inputBoxes">
            <input
              name="email"
              required
              value={email}
              onChange={(e) => handleInputChange(e)}
              type="email"
              placeholder="abc@gmail.com"
            />
            <input
              name="password"
              required
              value={password}
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="Password"
            />
          </div>
          <p className="text-blue-500 hover:underline cursor-pointer">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="bg-blue-500 w-full active:bg-blue-400 hover:bg-blue-600 py-2 text-xl rounded-md font-semibold text-white "
          >
            Login
          </button>
        </form>
        <p>
          Not a member?{" "}
          <Link to={"/signup"} className="text-green-700 font-semibold hover:underline cursor-pointer">
            Signup now
          </Link>
        </p>
      </div>
    </>
  );
};
