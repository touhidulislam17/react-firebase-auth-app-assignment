import { useAuth } from "../AuthContext";

export default function Dashboard() {
    const { user } = useAuth();
    const joined = new Date(user.metadata.creationTime).toLocaleDateString();
    const lastLogin = new Date(user.metadata.lastSignInTime).toLocaleString();

    return (
        <div>
            <div className="page-head">
                <h2>Welcome to Dashboard</h2>
                <p>Great to see you again. Here is a quick look at your space.</p>
            </div>

            <div className="grid">
                <div className="stat">
                    <small>Logged in as</small>
                    <h3>{user.email}</h3>
                </div>
                <div className="stat">
                    <small>Member since</small>
                    <h3>{joined}</h3>
                </div>
                <div className="stat">
                    <small>Last sign-in</small>
                    <h3>{lastLogin}</h3>
                </div>
            </div>
        </div>
    );
}