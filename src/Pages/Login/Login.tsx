import { FaFacebookF, FaGithub, FaGooglePlusG } from "react-icons/fa";
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// =================================================================
// type InputProps = {
//   email: string;
//   password: string;
//   handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
// };

// =================================================================
const Login: React.FC = () => {
  const { signIn, googleSign, GitHubSign, facebookSign } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // =================================================================
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // =================================================================
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
      Swal.fire({
        title: `Welcome to ToDo App ${user.name || user.email}`,
        showClass: {
          popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
        },
        hideClass: {
          popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
        },
      });
    });
  };

  // =================================================================
  const handleGoogleLogin = () => {
    googleSign().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };
  // =================================================================
  const handleGitHubLogin = () => {
    GitHubSign().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };
  // =================================================================
  // =================================================================
  const handleFacebookLogin = () => {
    facebookSign().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };
  // =================================================================
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full mt-16 shadow-2xl lg:px-28">
            {/* ============ */}
            <div className="px-8 mt-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-500 mb-4">
                  Already have an account?
                </h1>
                <p className="text-[14px] font-bold text-slate-500">
                  Use Social Media Credentials
                </p>
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={handleGoogleLogin}
                  className="cursor-pointer border-2 border-red-400 text-4xl text-green-500 bg-slate-100 shadow-xl p-1"
                >
                  <FaGooglePlusG />
                </button>

                <p
                  onClick={handleGitHubLogin}
                  className="cursor-pointer border-2 text-4xl bg-slate-200 shadow-xl p-1"
                >
                  <FaGithub />
                </p>
                <p
                  onClick={handleFacebookLogin}
                  className="border-2 text-4xl text-blue-500 bg-slate-200 shadow-xl p-1"
                >
                  <FaFacebookF />
                </p>
              </div>
            </div>

            <div className="divider mt-8">OR</div>
            {/* ============= */}

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-slate-500">
                    User Email*
                  </span>
                </label>
                <input
                  name="email" // Add name attribute
                  type="email"
                  placeholder="email"
                  className="p-2 border-2"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-slate-500">
                    Password*
                  </span>
                </label>
                <input
                  name="password" // Add name attribute
                  type="password"
                  placeholder="password"
                  className="p-2 border-2"
                  required
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6">
                <input
                  className="px-8 py-2 bg-blue-400 border-2 text-white hover:bg-white hover:text-black cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p className="text-[12px]">
                  For any issues or assistance, email
                  <a href="" className="underline ml-2 text-blue-500">
                    samialam5671@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
