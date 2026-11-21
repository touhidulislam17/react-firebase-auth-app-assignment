import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";

export default function Profile() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="center">
            <div className="card profile-card">
                <div className="avatar">{user.email[0].toUpperCase()}</div>
                <h2>Your Profile</h2>
                <p className="subtitle">Your account details, all in one place.</p>

                <div className="info-row">
                    <span>Email</span>
                    <span>{user.email}</span>
                </div>
                <div className="info-row">
                    <span>Member since</span>
                    <span>{new Date(user.metadata.creationTime).toLocaleDateString()}</span>
                </div>

                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}