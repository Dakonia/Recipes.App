import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Dishes.css"; // Импортируем CSS файл для стилей

function Dishes() {
  const params = useParams();
  const [dish, setDish] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/dishes/${params.id}`,
    })
      .then((response) => {
        setDish(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  return (
    <div className="dish-container">
      <h2 className="dish-name">{dish.name}</h2>
      <div className="dish-image-container">
        <img className="dish-image" src={dish.photo} alt="Изображение недоступно" />
      </div>
      <div className="dish-description">{dish.description}</div>
    </div>
  );
}

export default Dishes;
