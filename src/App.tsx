import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./pages/index";
// import Blog from "./pages/blog";
import Page404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;