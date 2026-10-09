import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegThumbsDown, FaShareSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

//import { BiDislike, BiSolidDislike, BiShareAlt } from "react-icons/bi";

import { BiLike } from "react-icons/bi";
import Comments from "./comments";
import { FaCommentAlt } from "react-icons/fa";
function PostDetails() {
  const [samplePosts, setSamplePosts] = useState([
    {
      id: 1,
      header: "🚀 Getting Started with React in 2026",
      content:
        "React continues to evolve with powerful features like Server Components and automatic state optimizations. Building small apps is the best way to master component isolation, state management, and props structure.",
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
      featuresYouCanAdd: [
        "Upvote/Downvote Counter",
        "Edit Post Inline Mode",
        "Delete Button",
        "Draft Autosave Status",
      ],
    },
  ]);
  const [seletctedPost, setSelectedPost] = useState(null);
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [shares, setShares] = useState(999);
  useEffect(() => {
    const post = samplePosts.find((p) => p.id === Number(id));
    setSelectedPost(post);
  }, [id, samplePosts]);
  const [readComments, setEradComents] = useState(false);
  const [loadingCommenst, setLoadingComments] = useState(false);
  function readPostComments() {
    setLoadingComments(true);
    new Promise((resolve) => {
      setTimeout(resolve, 3000);
    }).then(() => {
      setLoadingComments(false);
      setEradComents(true);
    });
  }
  function formatNumber(number) {
    if (number < 1000) {
      return number;
    }
    return (number / 1000).toFixed(1) + "k";
  }
  function deletePost() {
    setSelectedPost(null);
    setEradComents(false);
  }
  const navigate = useNavigate();

  return (
    <div className="p-6  max-w-md mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="py-4 px-8 md:py-3 md:px-6 border border-slate-800 rounded-lg mb-5 bg-slate-800/50 text-white font-bold hover:translate-x-2 duration-200 cursor-pointer"
        title="go back to posts page"
      >
        &larr; Back to Posts
      </button>

      {seletctedPost ? (
        <div className="bg-slate-900 p-6 border border-slate-800 rounded-2xl">
          <article className="flex justify-between items-center">
            <h3 className="font-bold text-xl mb-5">{seletctedPost.header}</h3>
            <button
              onClick={deletePost}
              className="text-slate-400 hover:text-red-400 bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-md transition-colors cursor-pointer"
              title="Delete Post"
            >
              <FaTrash size={16} />
            </button>
          </article>

          <p className="text-lg leading-relaxed md:text-base ">
            {seletctedPost.content}
          </p>

          <div className="flex gap-4 items-center mt-6 justify-between border-t border-slate-700 pt-6">
            <section className="flex gap-3 items-center">
              <button
                onClick={() => setLikes((prev) => prev + 1)}
                className="bg-slate-700 text-slate-300 p-2.5 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white 
                active:scale-90 transition-all duration-200"
              >
                <BiLike className="" size={20} />
              </button>
              <small className="font-semibold text-slate-300">{likes}</small>
            </section>

            <section className="flex gap-3 items-center">
              <button
                onClick={() => setDisLikes((prev) => prev + 1)}
                className="bg-slate-700 text-slate-300 p-2.5 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white 
                active:scale-90 transition-all duration-200"
              >
                <FaRegThumbsDown size={19} />
              </button>

              <small className="font-semibold text-slate-300">{disLikes}</small>
            </section>

            <section className="flex gap-3 items-center">
              <button
                onClick={() => setShares((prev) => prev + 1)}
                className="bg-slate-700 text-slate-300 p-2.5 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white 
                active:scale-90 transition-all duration-200"
              >
                <FaShareSquare size={19} />
              </button>

              <small className="font-semibold text-slate-300">
                {formatNumber(shares)}
              </small>
            </section>
            <button
              onClick={readPostComments}
              className="bg-slate-700 p-2.5 rounded-lg cursor-pointer hover:bg-indigo-400 text-slate-200 transition-all active:scale-95"
              title="read comments"
            >
              <FaCommentAlt size={19} />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="font-semibold text-center text-2xl">No post Yet</p>
        </div>
      )}
      {loadingCommenst ? (
        <section className="flex gap-3 justify-center items-center animate-pulse mt-5">
          <article className="flex gap-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay:.2s"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay:.4s"></div>
          </article>
          <p className="text-[20px]">Loading...</p>
        </section>
      ) : (
        readComments && <Comments />
      )}
    </div>
  );
}

export default PostDetails;
