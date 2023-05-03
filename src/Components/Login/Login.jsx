import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";

const Login = () => {
  const { signIn, user, googleSignUp, githubSignUp } = useContext(AuthContext);
  // const location = useLocation();
  // const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully logged in!!");
        event.target.reset();
        navigate("/");
      })
      .catch((err) => {
        const mess = err.message;
        toast.error(mess);
      });
  };

  const handleGoogleLogin = () => {
    googleSignUp()
      .then((res) => {
        const user = res.user;
        toast.success("successfully logged in with gmail");
        navigate("/");
      })
      .catch((err) => {
        console.log("err from google login", err);
      });
  };
  const handleGithubLogin = () => {
    githubSignUp()
      .then((res) => {
        const user = res.user;
        toast.success("successfully logged in with github");
        navigate("/");
      })
      .catch((err) => {
        console.log("err from github login", err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-2/3 mx-auto">
            Don't Have an Account?{" "}
            <Link className="link-info  hover:underline " to={"/registration"}>
              Register Here
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control ">
              <button onClick={handleGoogleLogin} className="btn btn-primary">
                <FaGoogle className="mr-2" />
                Login with Google
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control ">
              <button onClick={handleGithubLogin} className="btn btn-primary">
                {" "}
                <FaGithubSquare className="mr-2" />
                Login with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
