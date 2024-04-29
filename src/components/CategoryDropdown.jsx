import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (e) => {
    const selectedValue = e.currentTarget.getAttribute("data-value");
    setSelectedCategory(selectedValue);
    console.log(selectedCategory);
  };

  return (
    <ul className="main-menu__list">
      <li className="dropdown">
        <Link to={process.env.PUBLIC_URL + `#`}>
          Choix de catégorie{" "}
          {selectedCategory && <span>{selectedCategory}</span>}
          <span className="line"></span>
        </Link>
        <ul>
          <li
            name="fumer"
            onClick={handleClick}
            data-value="Fumier animal et compost"
          >
            <Link>Fumier animal et compost</Link>
          </li>
          <li
            name="fumers"
            onClick={handleClick}
            data-value="Engrais à base de végétaux"
          >
            <Link>Engrais à base de végétaux</Link>
          </li>
          <li
            name="fumers"
            onClick={handleClick}
            data-value="Engrais à base d'animaux marins"
          >
            <Link>Engrais à base d'animaux marins</Link>
          </li>
          <li
            name="fumers"
            onClick={handleClick}
            data-value="Engrais à base de déchets alimentaires"
          >
            <Link>Engrais à base de déchets alimentaires</Link>
          </li>
          <li
            name="fumers"
            onClick={handleClick}
            data-value="Engrais à base de micro-organismes"
          >
            <Link>Engrais à base de micro-organismes</Link>
          </li>
          <li
            name="fumers"
            onClick={handleClick}
            data-value="Engrais à base d'engrais verts"
          >
            <Link>Engrais à base d'engrais verts</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default CategoryDropdown;
