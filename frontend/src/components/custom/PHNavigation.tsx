import { TokenValidation } from '../../utils/utils'
import { Navigate } from 'react-router';
import { NavigateToRoute } from '../../types/enums';

function PHNavigation() {
    const tokenValidation = TokenValidation();
    // const navigate = useNavigate();
    return (
        <>
            {!tokenValidation.isExpired && tokenValidation.role === "customer" && <Navigate to={NavigateToRoute.FOOD} />}
        </>
    )
}

export default PHNavigation