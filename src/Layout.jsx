import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-screen w-full px-4">
        <nav class="bg-teal-700 sticky top-0 z-1000 backdrop-blur-md flex items-center p-4 justify-between min-w-screen px-5">
          <h3 className="font-bold text-2xl">Posts</h3>
          <button
            className="md:hidden text-2xl font-semibold text-white cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <small>&#10005;</small> : <small>&#9776;</small>}
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
            <ul className="md:hidden flex flex-col gap-3 p-2">
              <li>
                <Link to={"/"} className="font-semibold text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"about"} className="font-semibold text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to={"posts"} className="font-semibold text-blue-400">
                  Posts
                </Link>
              </li>
            </ul>
          )}
        </nav>

        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
