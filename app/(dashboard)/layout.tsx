import { NavBar } from "./_components/NavBar";
import { OrgSidebar } from "./_components/OrgSidebar";
import Sidebar from "./_components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="w-full flex h-full">
      <Sidebar />
      <div className="flex-1 h-full">
        <div className="h-full flex">
          <OrgSidebar />
          <div className="flex flex-col h-full w-full">
            <div className="h-[80px]">
              <NavBar />
            </div>
            <div className="h-[calc(100%-80px)]">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
