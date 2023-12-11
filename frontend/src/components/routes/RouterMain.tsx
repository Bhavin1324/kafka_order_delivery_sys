import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "../../pages/IndexPage";
import NotFound from "../../pages/NotFound";
import { NavigateTo } from "../../types/enums";
import AdminHome from "../../pages/admin/AdminHome";
import DeliveryStaffManager from "../../pages/admin/DeliveryStaffManager";
import ItemManager from "../../pages/admin/ItemManager";
import OutletManager from "../../pages/admin/OutletManager";

function RouterMain() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path={NavigateTo.ADMIN_DASHBOARD} element={<AdminHome/>} />
          <Route path={NavigateTo.ADD_DELIVERY_STAFF} element={<DeliveryStaffManager/>}/>
          <Route path={NavigateTo.ADD_ITEM} element={<ItemManager/>}/>
          <Route path = {NavigateTo.ADD_OUTLET} element ={<OutletManager/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default RouterMain;
