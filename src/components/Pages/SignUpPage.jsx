import { Link } from "react-router-dom";

export const SignUpPage = () => {
  return (
    <>
      <div className="LoginPage flex flex-col gap-3">
        <h1 className="text-3xl text-center font-semibold">Signup Form</h1>
        <p className="text-center">It's quik and easy</p>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
          <div className="inputBoxes">
            <input
              name="fullname"
              required
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              required
              type="text"
              placeholder="Enter Password"
            />
            <input
              name="confirmPassword"
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
