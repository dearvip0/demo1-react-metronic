import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { checkIsActive } from "../../../../../_helpers";
const MenuItem1 = ({ menuSub = "fixed" }) => {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  return (
    <div
      className={`menu-submenu menu-submenu-${menuSub} menu-submenu-left`}
      style={{ width: "1000px" }}
    >
      <div className="menu-subnav">
        <ul className="menu-content">
          <li className="menu-item ">
            <h3 className="menu-heading menu-toggle">
              <i className="menu-bullet menu-bullet-dot">
                <span></span>
              </i>
              <span className="menu-text">A ... C</span>
              <i className="menu-arrow"></i>
            </h3>
            <ul className="menu-inner">
              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/alert"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/alert">
                  <span className="menu-text">Alerts</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/accordion"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/accordion">
                  <span className="menu-text">Accordion</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/badge"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/badge">
                  <span className="menu-text">Badge</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/breadcrumb"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/breadcrumb">
                  <span className="menu-text">Breadcrumb</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/buttons"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/buttons">
                  <span className="menu-text">Buttons</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/button-group"
                )}`}
              >
                <NavLink
                  className="menu-link"
                  to="/react-bootstrap/button-group"
                >
                  <span className="menu-text">Button Group</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/cards"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/cards">
                  <span className="menu-text">Cards</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}
            </ul>
          </li>
          <li className="menu-item ">
            <ul className="menu-inner">
              <h3 className="menu-heading menu-toggle">
                <i className="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span className="menu-text">C ... J</span>
                <i className="menu-arrow"></i>
              </h3>
              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/carousel"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/carousel">
                  <span className="menu-text">Carousel</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/dropdowns"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/dropdowns">
                  <span className="menu-text">Dropdowns</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/forms"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/forms">
                  <span className="menu-text">Forms</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/input-group"
                )}`}
              >
                <NavLink
                  className="menu-link"
                  to="/react-bootstrap/input-group"
                >
                  <span className="menu-text">Input Group</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/images"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/images">
                  <span className="menu-text">Images</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/figures"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/figures">
                  <span className="menu-text">Figures</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/jumbotron"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/jumbotron">
                  <span className="menu-text">Jumbotron</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}
            </ul>
          </li>
          <li className="menu-item ">
            <h3 className="menu-heading menu-toggle">
              <i className="menu-bullet menu-bullet-dot">
                <span></span>
              </i>
              <span className="menu-text">L ... P</span>
              <i className="menu-arrow"></i>
            </h3>
            <ul className="menu-inner">
              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/list-group"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/list-group">
                  <span className="menu-text">List group</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/modal"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/modal">
                  <span className="menu-text">Modal</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/navs"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/navs">
                  <span className="menu-text">Navs</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/navbar"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/navbar">
                  <span className="menu-text">Navbar</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/overlays"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/overlays">
                  <span className="menu-text">Overlays</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/pagination"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/pagination">
                  <span className="menu-text">Pagination</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/popovers"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/popovers">
                  <span className="menu-text">Popovers</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}
            </ul>
          </li>
          <li className="menu-item ">
            <h3 className="menu-heading menu-toggle">
              <i className="menu-bullet menu-bullet-dot">
                <span></span>
              </i>
              <span className="menu-text">P ... T</span>
              <i className="menu-arrow"></i>
            </h3>
            <ul className="menu-inner">
              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/progress"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/progress">
                  <span className="menu-text">Progress</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/spinners"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/spinners">
                  <span className="menu-text">Spinners</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/table"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/table">
                  <span className="menu-text">Table</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/tabs"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/tabs">
                  <span className="menu-text">Tabs</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/tooltips"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/tooltips">
                  <span className="menu-text">Tooltips</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}

              {/*begin::3 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/toasts"
                )}`}
              >
                <NavLink className="menu-link" to="/react-bootstrap/toasts">
                  <span className="menu-text">Toasts</span>
                </NavLink>
              </li>
              {/*end::3 Level*/}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItem1;
