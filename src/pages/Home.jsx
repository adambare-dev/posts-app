import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl mb-5">Home page</h1>
      <section className="border-b border-slate-300 pb-10">
        <p className="text-lg">Explore your posts </p>
        <small className="text-base md:text-sm">
          Learn.Build . Become Better
        </small>
      </section>

      <article className="mt-6 ">
        <button
          onClick={() => navigate("/posts")}
          className="py-4 px-8 md:py-3 md:px-6 border border-slate-800 rounded-lg mb-5 bg-slate-800/50 text-white font-bold hover:translate-x-2 duration-200 cursor-pointer"
          title="go back to posts page"
        >
          Explore Posts &rarr;
        </button>
      </article>
    </div>
  );
}

export default Home;
