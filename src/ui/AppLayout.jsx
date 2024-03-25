import { Outlet, useNavigation } from "react-router-dom";

import styles from "./AppLayout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default AppLayout;
