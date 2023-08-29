
import AppNav from "../componenet/AppNav";
import SideBar from "../componenet/SideBar";
import styles from './AppLayout.module.css'
function AppLayout() {
  return (
    <div className={styles.app} >
      <SideBar />
    </div>
  );
}

export default AppLayout;
