import { ThemeToggler } from "../ThemeToggler";
import JoinedOrganizationList from "./JoinedOrganizationList";
import { NewButton } from "./NewButton";

const Sidebar = () => {
  return (
    <aside className="relative w-[60px] bg-blue-900 flex flex-col gap-4 h-full text-white p-3">
      <JoinedOrganizationList />
      <NewButton />
      <div className="absolute bottom-8">
        <ThemeToggler />
      </div>
    </aside>
  );
};

export default Sidebar;
