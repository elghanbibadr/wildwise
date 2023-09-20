import Logo from "../componenet/Logo"
import styles from './SideBar.module.css'
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />

            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
                </p>
            </footer>
        </div>
    );
}

export default SideBar