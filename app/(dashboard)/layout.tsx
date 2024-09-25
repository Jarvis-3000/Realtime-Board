import { NavBar } from "./_components/NavBar";
import { OrgSidebar } from "./_components/OrgSidebar";
import Sidebar from "./_components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="w-full h-full flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full flex overflow-hidden">
        <OrgSidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <NavBar />
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
