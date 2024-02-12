import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";

import Dishes from "./Dishes.jsx";
import Categories from "./Categories.jsx";


function Home() {
  const [categories, setCategories] = useState([]);
  const hostUrl = 'http://localhost:8000/';
  useEffect(() => {
    axios({
      method: "get",
      url: `${hostUrl}api/categories/`,
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <React.Fragment>
      <nav>
        <div>
          <Link to={""}>Home</Link>
          <a href={hostUrl + 'swagger'} target="_blank" rel="noopener noreferrer"> Swagger </a>
          <a href={hostUrl + 'documents'} target="_blank" rel="noopener noreferrer"> Documents </a>
          <a href={hostUrl + 'api/v1'} target="_blank" rel="noopener noreferrer"> D-Rest-F </a>
        </div>
        {categories.map((cat) => {
          return (
            <Link key={cat.id} to={"categories/" + cat.id}>
              {cat.name}
            </Link>
          );
        })}
      </nav>

      <Routes>
        <Route path="*" element={null} />
        <Route path="categories/:id/*" element={<Categories />} />
        <Route path="categories/:id/dishes/:id" element={<Dishes />} />
      </Routes>
    </React.Fragment>
  );
}

export default Home;