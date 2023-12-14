import React from 'react'
import { TokenValidation } from '../../utils/utils'
import { Navigate, useNavigate } from 'react-router';
import { NavigateToRoute } from '../../types/enums';

function PHNavigation() {
    const tokenValidation = TokenValidation();
    // const navigate = useNavigate();
    return (
        <div>
            {!tokenValidation.isExpired && tokenValidation.role === "customer" && <Navigate to={NavigateToRoute.FOOD} />}
        </div>
    )
}

export default PHNavigation