import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const navigation = [
  { name: "Home", href: "/", id: 1 },
  { name: "Blog", href: "/Blog", id: 2 },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  let notActiveClassName =
    "-mx-3 block rounded-lg px-3 py-2  hover:bg-amber-500  text-black";
  let activeClassName =
    "-mx-3 block rounded-lg px-3 py-2  bg-amber-500  text-black";

  if (loading) {
    return <Loader></Loader>;
  }
  const handleLogout = () => {
    logOut()
      .then(toast.success("successfully logged Out"))
      .catch((err) => console.log("err from logout", err));
  };
  return (
    <header className="sticky top-0  z-20  bg-black ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className=" text-amber-500 font-extrabold text-3xl">
              HOUSE OF THE CHEFS
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ActiveLink className="navLink" to={"/"}>
            Home
          </ActiveLink>
          <ActiveLink className="navLink" to={"/blog"}>
            Blog
          </ActiveLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <span className="flex justify-center items-center gap-2">
              {" "}
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <img className="profileImage" src={user?.photoURL}></img>
              </div>
              <button onClick={handleLogout} className="btn-primary">
                Logout
              </button>
            </span>
          ) : (
            <Link to={"/login"} className="btn-primary">
              Login/Register
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className=" text-amber-500 font-extrabold text-2xl">
                HOUSE OF THE CHEFS
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : notActiveClassName
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : notActiveClassName
                  }
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </div>
              <div className="py-6">
                {user ? (
                  <span className="flex justify-center items-center gap-2">
                    {" "}
                    <div
                      className="tooltip tooltip-left"
                      data-tip={user?.displayName}
                    >
                      <img className="profileImage" src={user?.photoURL}></img>
                    </div>
                    <button onClick={handleLogout} className="btn-primary">
                      Logout
                    </button>
                  </span>
                ) : (
                  <Link to={"/login"} className="btn-primary">
                    Login/Register
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
