import { useState } from "react";
import LoggedInNav from "../layouts/LoggedInNav";
import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { setProgress } from "../../features/slices/loadingSlice";

function ProtectedRoute() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(true);
  const { progress } = useSelector((store: RootState) => store.topLoading);
  const dispatch = useDispatch();
  // setIsLoggedin(true);
  return (
    <>
      <LoadingBar
        color="#E1701A"
        progress={progress}
        height={4}
        shadow={true}
        onLoaderFinished={() => {
          dispatch(setProgress(100));
        }}
      />
      {isLoggedin ? <LoggedInNav /> : <Navbar />}
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
