import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Registration = () => {
  const [success, setSuccess] = useState(false);
  const { signUp, updateMyUser } = useContext(AuthContext);

  const handleReg = (event) => {
    setSuccess(false);
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.file.value;
    signUp(email, password)
      .then((result) => {
        updateMyUser(displayName, photoURL)
          .then((result) => console.log("result from updte user", result))
          .catch((err) =>
            console.log("error from update profile", err.message)
          );
        console.log(result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => console.log("error from signup", error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 w-2/3 mx-auto">
            Already have an account ?{" "}
            <Link to={"/login"} className="link-info  hover:underline ">
              Login Here!
            </Link>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleReg} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="file"
                type="file"
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
        {success && (
          <p className="text-xl text-purple-600">Successfully registered!!</p>
        )}
      </div>
    </div>
  );
};

export default Registration;
