import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-screen w-full px-4">
        <nav class="bg-slate-800/20 sticky top-0 z-1000 backdrop-blur-md flex items-center p-4 justify-between min-w-screen px-5 py-5 border-b border-slate-600">
          <h3 className="font-bold text-2xl text-white">Posts</h3>
          <button
            className="md:hidden text-2xl font-semibold text-white cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <small className="text-2xl">&#10005;</small>
            ) : (
              <small className="text-2xl md:text-xl">&#9776;</small>
            )}
          </button>
          <ul className="hidden md:flex gap-3">
            <li>
              <Link to={"/"} className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"about"} className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to={"posts"} className="text-white">
                Posts
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          {isOpen && (
            <ul className="md:hidden flex flex-col gap-3 p-2 border-b border-slate-700 min-w-screen text-center">
              <li className="">
                <Link
                  to={"/"}
                  className="font-semibold text-white text-2xl hover:text-slate-300 transition-all duration-200s"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"about"}
                  className="font-semibold text-white text-2xl  hover:text-slate-300 transition-all duration-200s"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"posts"}
                  className="font-semibold text-white text-2xl  hover:text-slate-300 transition-all duration-200s"
                >
                  Posts
                </Link>
              </li>
            </ul>
          )}
        </nav>

        <main className="relative">
          <Outlet />
          <div className="w-14 h-14 bg-slate-800 rounded-full fixed right-2 bottom-20"></div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
