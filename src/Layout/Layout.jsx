import { Outlet } from "react-router-dom";
import AppNav from "../component/AppNav/AppNav";
import Sidebar from "../component/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Navbar at the top */}
        <AppNav />
        
        {/* Outlet renders the current page */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
