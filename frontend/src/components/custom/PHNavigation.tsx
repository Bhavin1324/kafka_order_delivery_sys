import { TokenValidation } from "../../utils/utils";
import { Navigate } from "react-router";
import { NavigateToRoute } from "../../types/enums";

function PHNavigation() {
  const tokenValidation = TokenValidation();
  // const navigate = useNavigate();
  return (
    <>
      {!tokenValidation.isExpired && tokenValidation.role === "customer" && (
        <Navigate to={NavigateToRoute.FOOD} />
      )}
      {!tokenValidation.isExpired && tokenValidation.role === "admin" && (
        <Navigate to={"admin/" + NavigateToRoute.ADMIN_DASHBOARD} />
      )}
      {!tokenValidation.isExpired && tokenValidation.role === "restaurant" && (
        <Navigate to={"outlet/" + NavigateToRoute.ADD_DELIVERY_STAFF} />
      )}
    </>
  );
}

export default PHNavigation;
