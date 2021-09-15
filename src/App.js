import React, { Component } from "react";
import "./App.css";
import BlogCard from "./BlogCard";

class App extends Component {
  state = {
    showBlogs: true,
  };

  blogArr = [
    {
      id: 1,
      title: "blog title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nibh metus, non semper nibh semper at. Praesent efficitur condimentum lorem eget vehicula. Phasellus cursus lacinia urna ac dapibus.",
      likeCount: 0,
    },
    {
      id: 2,
      title: "blog title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nibh metus, non semper nibh semper at. Praesent efficitur condimentum lorem eget vehicula. Phasellus cursus lacinia urna ac dapibus.",
      likeCount: 0,
    },
    {
      id: 3,
      title: "blog title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nibh metus, non semper nibh semper at. Praesent efficitur condimentum lorem eget vehicula. Phasellus cursus lacinia urna ac dapibus.",
      likeCount: 0,
    },
  ];

  blogCards = this.blogArr.map((item, pos) => {
    return (
      <BlogCard
        key={item.id}
        title={item.title}
        description={item.description}
        likeCount={item.likeCount}
        likeBtnClick={this.likeBtnClick}
      />
    );
  });

  hideBtn = () => {
    let updatedState = !this.state.showBlogs;
    this.setState({ showBlogs: updatedState });
  };

  likeBtnClick = () => {};

  render() {
    return (
      <div className="App">
        <button onClick={this.hideBtn}>
          {this.state.showBlogs ? "Hide List" : "Show List"}
        </button>
        <br />
        {this.state.showBlogs ? this.blogCards : null}
      </div>
    );
  }
}

export default App;
