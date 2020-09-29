// src/components/Skeleton.js
import React from "react";

const Skeleton = ({ children }) => {
  return (
    <div className="container">
      <div class="row">
        {children}
      </div>
    </div>
  );
};

export default Skeleton;