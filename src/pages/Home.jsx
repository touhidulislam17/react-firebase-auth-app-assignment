import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="hero">
            <span className="tag">Secure • Simple • Seamless</span>
            <h1>
                Your Gateway to a <span className="gold-text">Smarter, Safer</span> Experience
            </h1>
            <p>
                Step into a refined space built with React and Firebase. Sign in to
                unlock your personal dashboard and manage your profile with confidence.
            </p>

            <div className="btn-row">
                {user ? (
                    <Link to="/dashboard" className="btn btn-gold">Go to Dashboard</Link>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-gold">Get Started</Link>
                        <Link to="/login" className="btn btn-outline">I have an account</Link>
                    </>
                )}
            </div>
        </div>
    );
}