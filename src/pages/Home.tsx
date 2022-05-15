import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link to='/posts'>Posts</Link>
      </div>
      <div>
        <Link to='/items'>Items</Link>
      </div>
    </div>
  );
};

export default Home;
