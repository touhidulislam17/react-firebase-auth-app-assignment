import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;      // wait for Firebase to check
    if (!user) return <Navigate to="/login" replace />; // not logged in

    return children;
}