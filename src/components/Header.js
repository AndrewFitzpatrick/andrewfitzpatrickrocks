// src/components/Layout.js
import React from "react";
import Link from './Link';
import Skeleton from "./Skeleton.js";
import headerNav from "../data/headerNav.js";

const Header = () => {
  return (
    <header>
      <nav>
        <Skeleton>
          {
            headerNav.map((item, i) => (
              <div className = {item.classes} key={i}>
                <h4>
                  <Link to = {item.link} key={i}>
                    {item.text}
                  </Link>
                </h4>
              </div>
            ))
          }
        </Skeleton>
      </nav>
    </header>
  );
};

export default Header;