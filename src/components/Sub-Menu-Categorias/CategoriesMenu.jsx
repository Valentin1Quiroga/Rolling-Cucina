import React from "react";
import { Container } from "react-bootstrap";
import "./CategoriesMenu.css";
import ScrollspyNav from "react-scrollspy-nav";

function CategoriesMenu() {
  return (
    <div className="food-menu container-fluid">
      <ScrollspyNav
        scrollTargetIds={[
          "pizzas",
          "pastas",
          "ensaladas",
          "otros",
          "bebidas",
          "postres",
        ]}
        offset={-150}
        activeNavClass="is-active"
        // scrollDuration="1"
      >
        <div className="food-categories-items w-100 h-100 ">
          <ul className="list-unstyled d-flex">
            <li>
              <a href="#pizzas">
                <i className="fas fa-pizza-slice viejolobo"></i>Pizzas
              </a>
            </li>
            <li>
              <a href="#pastas">
                <i className="fas fa-bacon viejolobo"></i> Pastas
              </a>
            </li>
            <li>
              <a href="#ensaladas">
                <i className="fas fa-leaf viejolobo"></i>Ensaladas
              </a>
            </li>
            <li>
              <a href="#otros">
                <i className="fas fa-utensils viejolobo"></i> Otros
              </a>
            </li>
            <li>
              <a href="#bebidas">
                <i className="fas fa-glass-martini-alt viejolobo"></i>Bebidas
              </a>
            </li>
            <li>
              <a href="#postres">
                <i className="fas fa-ice-cream viejolobo"></i>Postres
              </a>
            </li>
          </ul>
        </div>
      </ScrollspyNav>
    </div>
    // <div className="food-menu">
    //   <div className="food-categories-items w-100 h-100 container-fluid">

    //       <a href="#pizza"> <i className="fas fa-pizza-slice"></i>Pizza</a>

    //       <a href="#pasta"> <i class="fas fa-bacon"></i> Pasta</a>

    //       <a href="#ensalada"> <i class="fas fa-leaf"></i>Ensalada</a>

    //       <a href="#otros"> <i className="fas fa-utensils"></i> Otros</a>

    //       <a href="#bebidas"><i className="fas fa-glass-martini-alt"></i>Bebidas</a>

    //       <a href="#postres"> <i className="fas fa-ice-cream"></i>Postres </a>

    //   </div>
    // </div>
  );
}

export default CategoriesMenu;
