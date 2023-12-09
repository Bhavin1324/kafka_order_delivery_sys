import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar py-0">
      <div className="container-fluid">
        <div className="flex justify-between w-full lg:w-1/2 mx-auto">
          <div className="self-center">
            <img
              src="./src/assets/icon_name_logo.svg"
              alt="no svg found"
              className="w-[60%] md:w-2/3"
            />
          </div>
          <div className="self-center">
            <Button
              variant="outlined"
              style={{
                backgroundColor: "#232B2B",
                color: "white",
                borderColor: "#232B2B",
                borderRadius: "1rem",
                padding: "8px 20px",
                textTransform: "none",
                cursor: "pointer",
                margin: "0px 4px",
              }}
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
