import JoinedOrganizationList from "./JoinedOrganizationList";
import { NewButton } from "./NewButton";

const Sidebar = () => {
  return (
    <aside className="w-[60px] bg-blue-900 flex flex-col gap-4 h-full text-white p-3">
      <JoinedOrganizationList />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
