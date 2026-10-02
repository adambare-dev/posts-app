import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Posts() {
  const [samplePosts, setSamplePosts] = useState([
    {
      id: 1,
      header: "🚀 Getting Started with React in 2026",
      content:
        "React continues to evolve with powerful features like Server Components and automatic state optimizations. Building small apps is the best way to master component isolation, state management, and props structure.",
      addedAt: new Date().toLocaleTimeString(),
      featuresYouCanAdd: [
        "Like Button",
        "Comment Section",
        "Read Time Calculator",
        "Share Button",
      ],
    },
    {
      id: 2,
      header: "🎨 Styling Your UI: Tailwind vs CSS Modules",
      content:
        "Choosing a styling strategy impacts how quickly you can scale. Tailwind CSS gives you speed through utility classes directly in your JSX, while CSS Modules ensure local scoping without class name collisions.",
      addedAt: new Date().toLocaleTimeString(),

      featuresYouCanAdd: [
        "Dark Mode Toggle",
        "Copy Code Snippet Feature",
        "Bookmark/Save Post",
        "Tag Filters",
      ],
    },
    {
      id: 3,
      header: "📈 Simple Rules for Better State Management",
      content:
        "Keep your state as local as possible. Only lift state up to a parent component when multiple sibling components absolutely need access to the same data, preventing unnecessary app-wide re-renders.",
      addedAt: new Date().toLocaleTimeString(),
      featuresYouCanAdd: [
        "Upvote/Downvote Counter",
        "Edit Post Inline Mode",
        "Delete Button",
        "Draft Autosave Status",
      ],
    },
  ]);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [add, setAdd] = useState("");
  const filteredPost = samplePosts.filter((p) =>
    p.header.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter mb-6">Posts</h1>

      <section className="relative border rounded-xl py-4 px-3 my-4 w-full md:w-1/2 flex">
        <input
          type="text"
          placeholder="search post"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" text-xl md:text-lg grow ml-10 outline-none "
        />
        <FaSearch className="absolute top-5 text-gray-500" size={22} />
      </section>

      <ul className="flex flex-col gap-5  md:flex-row">
        {filteredPost.length > 0 ? (
          filteredPost.map((post) => (
            <div
              key={post.id}
              className=" bg-slate-900 p-6 rounded-lg flex flex-col justify-center border border-slate-700"
            >
              <h3 className="text-left font-semibold">{post.header}</h3>
              <small className="text-left text-base md:text-sm">
                Added at: {post.addedAt}
              </small>

              <Link
                to={`../postsDetails/${post.id}`}
                className="font-bold text-blue-400 text-left mt-6 text-2xl md:text-xl"
              >
                Veiw post details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-lg md:text-base">No post found</p>
        )}
      </ul>
      <button
        onClick={() => navigate(-1)}
        className="py-4 px-8 md:py-3 md:px-6 border border-slate-800 rounded-lg mb-5 bg-slate-800/50 text-white font-bold hover:translate-x-2 duration-200 cursor-pointer mt-9"
        title="go back to home page"
      >
        &larr; Back To Home
      </button>
    </div>
  );
}

export default Posts;
