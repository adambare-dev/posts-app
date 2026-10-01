import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-screen w-full border">
        <nav class="bg-slate-950/50 sticky top-0 z-1000 backdrop-blur-md flex flex-col gap-4 items-center p-4 md:flex-row justify-between min-w-screen">
          <h3 className="font-bold text-2xl">&lt;/&gt;</h3>
          <button></button>
          <ul className="flex gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"posts"}>Posts</Link>
            </li>
          </ul>
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
