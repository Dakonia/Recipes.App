import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css"

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
    <div className="container">
      <nav className="sidebar">
        <h3>Категории</h3>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link to={"categories/" + cat.id}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="*" element={null} />
          <Route path="categories/:id/*" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
