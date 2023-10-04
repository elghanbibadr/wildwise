
import AppNav from "../componenet/AppNav";
import SideBar from "../componenet/SideBar";
import Map from "../componenet/Map";
import styles from './AppLayout.module.css'
function AppLayout() {
  return (
    <div className={styles.app} >
      <SideBar />
      <Map/>
    </div>
  );
}

export default AppLayout;
