import { NavLink, Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useAuth } from "./AuthContext";

export default function Navbar() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="brand">◆ Aurum</Link>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                {user ? (
                    <>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}