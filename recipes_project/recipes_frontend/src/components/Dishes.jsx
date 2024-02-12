import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <React.Fragment>
      <div>
        <div>Блюдо:</div>
        <div>{dish.name}</div>
        <div>Рецепт:</div>
        <div>{dish.description}</div>
        <img src={dish.photo} alt="Изображение недоступно" />
      </div>
    </React.Fragment>
  );
}

export default Dishes;