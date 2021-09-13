import "./App.css";
import BlogCard from "./BlogCard";

function App() {
  const blogArr = [
    {
      id: 1,
      title: "blog title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nibh metus, non semper nibh semper at. Praesent efficitur condimentum lorem eget vehicula. Phasellus cursus lacinia urna ac dapibus.",
    },
    {
      id: 2,
      title: "blog title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nibh metus, non semper nibh semper at. Praesent efficitur condimentum lorem eget vehicula. Phasellus cursus lacinia urna ac dapibus.",
    },
    {
      id: 3,
      title: "blog title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra nibh metus, non semper nibh semper at. Praesent efficitur condimentum lorem eget vehicula. Phasellus cursus lacinia urna ac dapibus.",
    },
  ];

  const blogCards = blogArr.map((item, pos) => {
    return (
      <BlogCard
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });

  return <div className="App">{blogCards}</div>;
}

export default App;
