import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ isAuthenticated }) => {
  return (
    <ul className="main-menu__list">
      <li>
        <Link to={process.env.PUBLIC_URL + `/`}>
          Accueil <span className="line"></span>
        </Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + `/about`}>
          A&nbsp;propos <span className="line"></span>
        </Link>
      </li>
      {/* <li className="dropdown">
        <Link to={process.env.PUBLIC_URL + `#`}>
          Nos&nbsp;offres <span className="line"></span>
        </Link>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + `/services`}>Services</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/arbor-management`}>
              Nos partenaires
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/garden-management`}>
              Nous choisir?
            </Link>
          </li>
          {/* <li>
            <Link to={process.env.PUBLIC_URL + `/nursery`}>
              Nursery & Tree Farm
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/trimming`}>
              Trimming & Pruning
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/weeds-control`}>
              Pests & Weeds Control
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/flowers-garden`}>
              Fruits & Flowers Garden
            </Link> */}
      {/* </li> */}
      {/* </ul> */}
      {/* // </li> */}
      {/*<li className="dropdown">
        <Link to={process.env.PUBLIC_URL + `#`}>
          Pages <span className="line"></span>
        </Link>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + `/team`}>Nos équipes</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/team-details`}>
              Team Details
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/portfolio-1`}>
              Portfolio 01
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/portfolio-2`}>
              Portfolio 02
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/faq`}>Faq</Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="dropdown">
        <Link to={process.env.PUBLIC_URL + `#`}>
          Blog <span className="line"></span>
        </Link>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/blog-grid`}>Blog Grid</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + `/blog-details`}>
              Blog Details
            </Link>
          </li>
        </ul>
      </li> */}
      {isAuthenticated && (
        <li>
          <Link to={process.env.PUBLIC_URL + `/dashboard`}>
            Dashboard <span className="line"></span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Nav;
