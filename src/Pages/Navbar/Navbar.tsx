import { Link } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar: React.FC = () => {
  // =================================================================
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // =================================================================
  const navOptions = (
    <>
      <li className="">
        <Link to="/">
          <div className="px-8 py-2 hover:text-blue-500">Home</div>
        </Link>
      </li>
      <li className="px-8 py-2 bg-blue-400 border-2 text-white hover:bg-white hover:text-black cursor-pointer">
        <Link to="/signup">
          <div className="">SignUp</div>
        </Link>
      </li>
      {user ? (
        <>
          <li
            onClick={handleLogout}
            className="px-8 py-2 border-2 text-black hover:bg-red-400 hover:text-white cursor-pointer"
          >
            <Link to="/login">
              <div className="">LogOut</div>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="px-8 py-2 border-2 text-black hover:bg-blue-500 hover:text-white cursor-pointer">
            <Link to="/login">
              <div className="">Login</div>
            </Link>
          </li>
        </>
      )}

      {user ? (
        <>
          <img
            src={user.photoURL}
            className="w-[40px] h-[40px] rounded-full mt-1"
            alt=""
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
  // =================================================================

  return (
    <>
      <div className="navbar fixed z-10 text-black bg-white shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-2 z-[1] p-4 shadow bg-base-200 border-2 border-slate-500 text-black rounded-box w-52"
            >
              {navOptions}
              {/* <UserMenu></UserMenu> */}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="">
              <LuListTodo className="w-[40px] h-[40px] text-blue-500" />
            </div>
            <div className="">
              <a
                href="/"
                className="bg-gradient-to-b from-blue-600 to-cyan-200 text-transparent bg-clip-text font-bold font-Rancho tracking-tight hover:tracking-wide lg:text-4xl ml-4 lg:ml-8"
              >
                To-Do
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-6 text-[16px]">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
