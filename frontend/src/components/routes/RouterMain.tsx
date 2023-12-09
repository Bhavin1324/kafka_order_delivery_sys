import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "../../pages/IndexPage";
import NotFound from "../../pages/NotFound";

function RouterMain() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterMain;
