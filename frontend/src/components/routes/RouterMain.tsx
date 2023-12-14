import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "../../pages/IndexPage";
import NotFound from "../../pages/NotFound";
import FoodsHome from "../../pages/foods/FoodsHome";
import ProtectedRoute from "./ProtectedRoute";
import { NavigateToRoute } from "../../types/enums";
import SearchFood from "../../pages/foods/SearchFood";
import Cart from "../../pages/customers/Cart";
import UserProfile from "../../pages/customers/UserProfile";
import AdminHome from "../../pages/admin/AdminHome";
import DeliveryStaffManager from "../../pages/admin/DeliveryStaffManager";
import ItemManager from "../../pages/admin/ItemManager";
import OutletManager from "../../pages/admin/OutletManager";
import OrdersHistory from "../../pages/outlets/OrdersHistory";
import PlacedOrders from "../../pages/outlets/PlacedOrders";
import PreparedOrders from "../../pages/outlets/PreparedOrders";

function RouterMain() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={NavigateToRoute.HOME} element={<IndexPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path={NavigateToRoute.FOOD} element={<FoodsHome />} />
            <Route
              path={NavigateToRoute.SEARCH_FOOD}
              element={<SearchFood />}
            />
            <Route path={NavigateToRoute.CART} element={<Cart />} />
            <Route
              path={NavigateToRoute.USER_PROFILE}
              element={<UserProfile />}
            />
          </Route>
          <Route path="admin" >
            <Route
              path={NavigateToRoute.ADMIN_DASHBOARD}
              element={<AdminHome />}
            />
            <Route
              path={NavigateToRoute.ADD_DELIVERY_STAFF}
              element={<DeliveryStaffManager />}
            />
            <Route path={NavigateToRoute.ADD_ITEM} element={<ItemManager />} />
            <Route
              path={NavigateToRoute.ADD_OUTLET}
              element={<OutletManager />}
            />
           
          </Route>
          <Route path="outlet">
              <Route
                path={NavigateToRoute.ADD_DELIVERY_STAFF}
                element={<DeliveryStaffManager />}
              />
              <Route
                path={NavigateToRoute.ORDER_H}
                element={<OrdersHistory />}
              />
              <Route
              path={NavigateToRoute.ORDER_P}
              element={<PlacedOrders/>}/>
              <Route
              path={NavigateToRoute.ORDER_PRE}
              element={<PreparedOrders/>}
              />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterMain;
