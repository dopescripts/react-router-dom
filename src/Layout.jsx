import React, {Suspense} from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

const Layout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <>
      <Header />
      <div className="py-8 px-5 lg:px-10 bg-gray-200">
        {isNavigating && 'Hold up hold up'}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
