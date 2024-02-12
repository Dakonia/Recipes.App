import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link, useLocation } from "react-router-dom"; // Импортируем useLocation из react-router-dom
import axios from "axios";
import "../styles/Categories.css"; // Импортируем CSS файл

import Dishes from "./Dishes.jsx";

function Categories() {
  const params = useParams();
  const location = useLocation(); // Получаем текущий путь
  const [allDishes, setAllDishes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [showCategoryInfo, setShowCategoryInfo] = useState(true); // Состояние для отображения информации о категории
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
    // Проверяем текущий путь и скрываем информацию о категории, если это страница с блюдом
    if (location.pathname.includes('dishes')) {
      setShowCategoryInfo(false);
    } else {
      setShowCategoryInfo(true);
    }
  }, [location]);

  return (
    <div className="container"> {/* Применяем классы из CSS файла */}
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
