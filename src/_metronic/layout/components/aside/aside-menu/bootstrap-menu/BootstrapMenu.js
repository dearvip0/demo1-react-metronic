import React from "react";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
const BootstrapMenu = ({ getMenuItemActive, toAbsoluteUrl }) => {
  return (
    <>
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/react-bootstrap",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
          </span>
          <span className="menu-text">Bootstrap</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <ul className="menu-subnav">
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Bootstrap</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/alert"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/alert">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Alerts</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/badge"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/badge">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Badge</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/breadcrumb"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/breadcrumb">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Breadcrumb</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/buttons"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/buttons">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Buttons</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/button-group"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/react-bootstrap/button-group"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Button Group</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/cards"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/cards">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Cards</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/carousel"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/carousel">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Carousel</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/dropdowns"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/dropdowns">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Dropdowns</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/forms"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/forms">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Forms</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/input-group"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/react-bootstrap/input-group"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Input Group</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/images"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/images">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Images</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/figures"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/figures">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Figures</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/jumbotron"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/jumbotron">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Jumbotron</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/list-group"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/list-group">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">List group</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/modal"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/modal">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Modal</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/navs"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/navs">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Navs</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/navbar"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/navbar">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Navbar</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/overlays"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/overlays">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Overlays</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/pagination"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/pagination">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Pagination</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/popovers"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/popovers">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Popovers</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/progress"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/progress">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Progress</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/spinners"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/spinners">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Spinners</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/table"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/table">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Table</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/tabs"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/tabs">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Tabs</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/tooltips"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/tooltips">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Tooltips</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/toasts"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/toasts">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Toasts</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}

      {/* Applications */}
      {/* begin::section */}
      <li className="menu-section ">
        <h4 className="menu-text">Applications</h4>
        <i className="menu-icon flaticon-more-v2"></i>
      </li>
      {/* end:: section */}

      {/* eCommerce */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/e-commerce",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/e-commerce">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
          </span>
          <span className="menu-text">eCommerce</span>
        </NavLink>
        <div className="menu-submenu">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">eCommerce</span>
              </span>
            </li>
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Customers</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/products"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/products">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Products</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}

      {/*begin::1 Level*/}
      <li
        className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
        aria-haspopup="true"
      >
        <NavLink className="menu-link" to="/user-profile">
          <span className="svg-icon menu-icon">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")}
            />
          </span>
          <span className="menu-text">User Profile</span>
        </NavLink>
      </li>
      {/*end::1 Level*/}

      {/* Custom */}
      {/* begin::section */}
      <li className="menu-section ">
        <h4 className="menu-text">Custom</h4>
        <i className="menu-icon flaticon-more-v2"></i>
      </li>
      {/* end:: section */}

      {/* Error Pages */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/error",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/error">
          <span className="svg-icon menu-icon">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")}
            />
          </span>
          <span className="menu-text">Error Pages</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">Error Pages</span>
              </span>
            </li>

            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/error/error-v1")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/error/error-v1">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Error Page - 1</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/error/error-v2")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/error/error-v2">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Error Page -2</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/error/error-v3")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/error/error-v3">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Error Page - 3</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/error/error-v4")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/error/error-v4">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Error Page - 4</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/error/error-v5")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/error/error-v5">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Error Page - 5</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/error/error-v6">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Error Page - 6</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}
    </>
  );
};

export default BootstrapMenu;
