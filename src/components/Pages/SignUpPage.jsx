import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === "fullname") {
      setFullname(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirmPassword") {
      setConfirmPass(value);
    }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const data = {
      fullname: fullname,
      email: email,
      password: password,
      confirmPass: confirmPass
    }

    console.log(data);
    setFullname("")
    setEmail("")
    setPassword("")
    setConfirmPass("")

  }

  return (
    <>
      <div className="LoginPage flex flex-col gap-3">
        <h1 className="text-4xl text-center font-bold text-blue-500">Signup Form</h1>
        <p className="text-center">It's quik and easy</p>
        <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-3">
          <div className="inputBoxes">
            <input
              name="fullname"
              value={fullname}
              onChange={(e) => handleInputChange(e)}
              required
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              required
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              required
              type="text"
              placeholder="Enter Password"
            />
            <input
              name="confirmPassword"
              value={confirmPass}
              onChange={(e) => handleInputChange(e)}
              required
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full active:bg-blue-400 hover:bg-blue-600 py-2 text-xl rounded-md font-semibold text-white "
          >
            Signup
          </button>
        </form>
        <p>
          Already Registered?{" "}
          <Link
            to={"/login"}
            className="text-green-700 font-semibold hover:underline cursor-pointer"
          >
            Login here
          </Link>
        </p>
      </div>
    </>
  );
};
