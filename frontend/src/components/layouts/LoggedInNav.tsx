import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavigateToRoute } from "../../types/enums";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

function LoggedInNav() {
  const navList = useRef<HTMLUListElement>(null);
  const HamBurger = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  //   const role = TokenValidation();
  const checkSize = () => {
    if (window.innerWidth >= 768) {
      navList.current?.classList.add("nav-list");
      navList.current?.classList.remove("nav-mobile-list");
    } else {
      navList.current?.classList.add("nav-mobile-list");
      navList.current?.classList.remove("nav-list");
    }
  };
  const toggleHam = () => {
    HamBurger.current?.classList.toggle("ham-active");
    if (navList.current?.classList.contains("nav-mobile-list")) {
      navList.current?.classList.toggle("left-full");
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(NavigateToRoute.HOME);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <nav className="navbar py-0" style={{ position: "sticky", top: 0 }}>
      <div className="container d-flex justify-content-start">
        <div className="self-center">
          <img
            src="./src/assets/icon_name_logo.svg"
            alt="no svg found"
            className="w-[60%] md:w-2/3"
          />
        </div>
        <ul
          className={
            window.innerWidth >= 768
              ? "nav-list ms-auto left-full"
              : "nav-mobile-list left-full"
          }
          ref={navList}
        >
          <li className="nav-list-items">
            {" "}
            <NavLink
              className={`link-a font-semibold`}
              to={NavigateToRoute.FOOD}
              onClick={toggleHam}
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#E1701A",
                      color: "white",
                      TextDecoration: "none",
                    }
                  : {
                      TextDecoration: "none",
                    };
              }}
            >
              <LocalPizzaIcon style={{ marginBottom: "2px" }} /> Menu
            </NavLink>
          </li>
          <li className="nav-list-items">
            {" "}
            <NavLink
              className={`link-a font-semibold`}
              to={NavigateToRoute.SEARCH_FOOD}
              onClick={toggleHam}
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#E1701A",
                      color: "white",
                      TextDecoration: "none",
                    }
                  : {
                      TextDecoration: "none",
                    };
              }}
            >
              <SearchIcon style={{ marginBottom: "2px" }} /> Search
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink
              className={`link-a font-semibold`}
              to={NavigateToRoute.CART}
              onClick={toggleHam}
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#E1701A",
                      color: "white",
                      TextDecoration: "none",
                    }
                  : {
                      TextDecoration: "none",
                    };
              }}
            >
              <ShoppingCartOutlinedIcon /> Cart
            </NavLink>
          </li>
          <li className="nav-list-items">
            <NavLink
              className={`link-a font-semibold`}
              to={NavigateToRoute.USER_PROFILE}
              onClick={toggleHam}
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: "#E1701A",
                      color: "white",
                      TextDecoration: "none",
                    }
                  : {
                      TextDecoration: "none",
                    };
              }}
            >
              <AccountCircleOutlinedIcon style={{ marginBottom: "2px" }} /> User
              profile
            </NavLink>
          </li>

          <li className="md:hidden">
            <button className="btn-theme my-3" onClick={logOut}>
              Logout
            </button>
          </li>
        </ul>
        <div className="hidden md:flex">
          {/* Hardcoded for now */}
          <div className="self-center mx-2 font-semibold ">
            {localStorage.getItem("user")}
          </div>
          <button className="btn-theme-outlined" onClick={logOut}>
            <LogoutOutlinedIcon /> Logout
          </button>
        </div>
        <div ref={HamBurger} className="hamburger ms-auto" onClick={toggleHam}>
          <hr className="slice" />
          <hr className="slice" />
          <hr className="slice" />
        </div>
      </div>
    </nav>
  );
}

export default LoggedInNav;
