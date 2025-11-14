import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <p >&copy; {new Date().getFullYear()} Neil Surridge. All rights reserved.</p>
        </footer>
    )
}

export { Footer }