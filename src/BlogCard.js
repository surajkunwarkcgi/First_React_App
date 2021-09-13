import React from "react";

const BlogCard = (properties) => {
  return (
    <div className="BlogCard">
      <h3>{properties.title}</h3>
      <p>{properties.description}</p>
    </div>
  );
};

export default BlogCard;
