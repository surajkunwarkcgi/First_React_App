import React from "react";
import classes from "./BlogCard.module.css";

const BlogCard = (props) => {
  // likeBtnClick = () => {
  //   this.setState((prevState, prevProps) => {
  //     return { likeCount: prevState.likeCount + 1 };
  //   });
  // };

  return (
    <div className={classes.BlogCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <p>
        Like Count: <span className={classes.likeCount}>{props.likeCount}</span>
      </p>
      <button onClick={props.likeBtnClick}>Like</button>
    </div>
  );
};

export default BlogCard;
