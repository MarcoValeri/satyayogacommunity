import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../hooks/AuthContext"

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();
    const localtion = useLocation();

    if (!currentUser) {
        return <Navigate to="/login" state={{ from: localtion }} replace />
    }

    return children;
}

export default ProtectedRoute;