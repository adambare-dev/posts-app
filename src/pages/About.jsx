import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold tracking-tight mb-6 text-teal-400">
        About This Project
      </h1>

      <p className="text-lg text-slate-300 leading-relaxed mb-6">
        Welcome to my 2026 posts project! 💗 This application is built using
        React and is designed to help organize, view, and explore various posts
        seamlessly with client-side routing.
      </p>
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 max-w-md mx-auto">
        <h3 className="font-semibold text-2xl mb-5">Qiuck Links</h3>
        <nav className="flex gap-7">
          <Link to={"/"} className="font-semibold text-blue-400">
            Home
          </Link>
          <Link to={"/posts"} className="font-semibold text-blue-400">
            Posts
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default About;
