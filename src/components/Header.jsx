import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <Link to="/">
            <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
              <span className="text-slate-500">Prime </span>
              <span className="text-slate-700">Estate </span>
            </h1>
          </Link>
         
            <form
              action=""
              className="bg-slate-100 p-3 rounded-lg flex items-center "
            >
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-24 sm:w-64"
              />
              <FaSearch className="text-slate-600" />
            </form>
        
          <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden text-slate-700 sm:inline hover:underline cursor-pointer">
              Home
            </li>
            </Link>
            <Link to="/about">
            <li className="hidden text-slate-700 sm:inline hover:underline cursor-pointer">
              About
            </li>
            </Link>
            <Link to={'/sign-in'}>
            <li className=" text-slate-700 sm:inline hover:underline cursor-pointer">
              Sign in
            </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
