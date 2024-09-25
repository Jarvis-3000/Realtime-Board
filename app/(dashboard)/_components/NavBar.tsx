"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import { SearchIput } from "./SearchInput";
import { InviteButton } from "./InviteButton";

export const NavBar = () => {
  const { organization } = useOrganization();

  return (
    <div className="h-[60px] w-full overflow-auto flex  flex-shrink-0 items-center gap-x-5 px-3 py-3 bg-gray-200 dark:bg-gray-300">
      <div className="hidden lg:flex lg:flex-1">
        <SearchIput />
      </div>
      <div className="flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: "flex w-full",
              organizationSwitcherTrigger: `bg-white dark:bg-white w-full p-2 rounded-lg justify-between
            border border-gray-100 focus:border-blue-500 max-w-[400px]`,
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};
