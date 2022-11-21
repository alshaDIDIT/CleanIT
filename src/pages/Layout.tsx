import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";

export function Layout() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}

export default Layout;
