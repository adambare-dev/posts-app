import Posts from "./pages/Posts";
import PostDetails from "./PostsDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen text-gray-400 w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="posts" element={<Posts />} />
              <Route path="postsDetails/:id" element={<PostDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
