import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white flex items-center justify-center">
      <Link to={"/login"} className="text-5xl font-bold cursor-pointer active:text-green-500 select-none">Login</Link>
    </div>
  );
};
