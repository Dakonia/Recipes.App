import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link, useLocation } from "react-router-dom"; 
import axios from "axios";
import "../styles/Categories.css"; 

import Dishes from "./Dishes.jsx";

function Categories() {
  const params = useParams();
  const location = useLocation(); 
  const [allDishes, setAllDishes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [showCategoryInfo, setShowCategoryInfo] = useState(true); 
  const restUrl = 'http://localhost:8000/api/';

  useEffect(() => {
    axios({
      method: "get",
      url: `${restUrl}dishes/`,
    })
      .then((response) => {
        setAllDishes(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${restUrl}categories/${params.id}`,
    })
      .then((response) => {
        setCurrentCategory(response.data.name);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  useEffect(() => {
    if (location.pathname.includes('dishes')) {
      setShowCategoryInfo(false);
    } else {
      setShowCategoryInfo(true);
    }
  }, [location]);

  return (
    <div className="container"> 
      {showCategoryInfo && (
        <>
          <h2 className="category-title">Блюда из категории: {currentCategory}</h2>
          <nav>
            <ul>
              {allDishes.map((dish) => {
                if (dish.category == params.id) {
                  return (
                    <li key={dish.id}>
                      <Link to={"dishes/" + dish.id}>{dish.name}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
        </>
      )}
      <Routes>
        <Route path="dishes/:id/" element={<Dishes />} />
      </Routes>
    </div>
  );
}

export default Categories;
