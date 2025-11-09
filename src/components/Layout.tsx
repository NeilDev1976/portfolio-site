import { Outlet } from "react-router-dom";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

const Layout = () => {
    return (
        <main>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </main>
    );
}

export {Layout};