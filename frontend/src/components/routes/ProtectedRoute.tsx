import { useState } from "react";
import LoggedInNav from "../layouts/LoggedInNav";
import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  setTimeout(() => {
    setIsLoggedin(!isLoggedin);
  }, 5000);
  return (
    <>
      {isLoggedin ? <LoggedInNav /> : <Navbar />}
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
