import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { checkIsActive, toAbsoluteUrl } from "../../../../../_helpers";
import trees from "./MaterialUIItem";
import custom from "./CustomItem";
const TreeView = ({ module, children, getMenuItemActive, name }) => {
  const result =
    children &&
    children
      .filter((n) => n.module === name)
      .map((child, index) => {
        return (
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              `/${module}/${child.module}`
            )}`}
            data-menu-toggle="hover"
            aria-haspopup="true"
            key={index}
          >
            <NavLink
              className="menu-link menu-toggle"
              to={`/${module}/${child.module}`}
            >
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl(child.src)} />
              </span>
              <span className="menu-text">{child.title}</span>
              <i className="menu-arrow" />
            </NavLink>
            <div
              className={`menu-submenu menu-submenu-classic menu-submenu-right`}
            >
              <ul className="menu-subnav">
                {/*begin::3 Level*/}
                {child.node === 2 &&
                  child.children &&
                  child.children.map((node, index) => {
                    return (
                      <li
                        className={`menu-item ${getMenuItemActive(
                          `/${module}/${child.module}/${node.module}`
                        )}`}
                        key={index}
                      >
                        <NavLink
                          className="menu-link"
                          to={`/${module}/${child.module}/${node.module}`}
                        >
                          <i className="menu-bullet menu-bullet-dot">
                            <span />
                          </i>
                          <span className="menu-text">{node.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                {/*end::3 Level*/}
              </ul>
            </div>
          </li>
        );
      });
  return result;
};

const MenuItem2 = ({ menuSub = "classic", category = "framework" }) => {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  return (
    <div className={`menu-submenu menu-submenu-${menuSub} menu-submenu-left`}>
      <ul className="menu-subnav">
        {category === "framework" ? (
          <>
            {/*Classic submenu*/}
            {/*begin::2 Level*/}
            <TreeView
              name="inputs"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <TreeView
              name="navigation"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <TreeView
              name="surfaces"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />

            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <TreeView
              name="feedback"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />

            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <TreeView
              name="data-displays"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />

            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <TreeView
              name="utils"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />

            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <TreeView
              name="layout"
              {...trees}
              getMenuItemActive={getMenuItemActive}
            />

            {/*end::2 Level*/}
          </>
        ) : (
          <>
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/e-commerce"
              )}`}
              data-menu-toggle="hover"
              aria-haspopup="true"
            >
              <NavLink className="menu-link menu-toggle" to="/e-commerce">
                <span className="menu-text">eCommerce</span>
                <i className="menu-arrow" />
              </NavLink>
              <div
                className={`menu-submenu menu-submenu-classic menu-submenu-right`}
              >
                <ul className="menu-subnav">
                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/e-commerce/customers"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/e-commerce/customers">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Customers</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/e-commerce/products"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/e-commerce/products">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Products</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}
                </ul>
              </div>
            </li>
            {/*end::2 Level*/}

            {/*begin::2 Level*/}
            <li className={`menu-item ${getMenuItemActive("/builder")}`}>
              <NavLink className="menu-link" to="/builder">
                <span className="menu-text">Layout Builder</span>
              </NavLink>
            </li>
            {/*end::3 Level*/}

            {/*begin::2 Level*/}
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/error"
              )}`}
              data-menu-toggle="hover"
              aria-haspopup="true"
            >
              <NavLink className="menu-link menu-toggle" to="/error">
                <span className="menu-text">Error Pages</span>
                <i className="menu-arrow" />
              </NavLink>
              <div
                className={`menu-submenu menu-submenu-classic menu-submenu-right`}
              >
                <ul className="menu-subnav">
                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/error/error-v1"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/error/error-v1">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error 1</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/error/error-v2"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/error/error-v2">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error 2</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/error/error-v3"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/error/error-v3">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error 3</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/error/error-v4"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/error/error-v4">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error 4</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/error/error-v5"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/error/error-v5">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error 5</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/error/error-v6"
                    )}`}
                  >
                    <NavLink className="menu-link" to="/error/error-v6">
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Error 6</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}
                </ul>
              </div>
            </li>
            {/*end::2 Level*/}
          </>
        )}
      </ul>
    </div>
  );
};

export default MenuItem2;
