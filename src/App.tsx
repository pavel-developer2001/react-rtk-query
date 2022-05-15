import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import PostPage from "./pages/PostPage";
import Posts from "./pages/Posts";

function App() {
  const routerPaths: Array<{ path: string; element: JSX.Element }> = [
    { path: "/", element: <Home /> },
    { path: "/posts", element: <Posts /> },
    { path: "/post/:id", element: <PostPage /> },
    { path: "/items", element: <Items /> },
  ];
  return (
    <div className='App'>
      <Routes>
        {routerPaths.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
