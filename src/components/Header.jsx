import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link>
        <img
          className="max-w-[150px]"
          src="/public/netflix_logo.svg"
          alt="Netflix"
        />
      </Link>
    </header>
  );
};

export default Header;
