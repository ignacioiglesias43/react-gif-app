import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const App = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2 className="animate__jello animate__backInDown">Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        ) : (
          <p id="no-gif">Aquí se mostrarán los GIF</p>
        )}
      </ul>
    </>
  );
};

export default App;
