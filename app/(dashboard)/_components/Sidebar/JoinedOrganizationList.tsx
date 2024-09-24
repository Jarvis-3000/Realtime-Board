"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { JoinedOrganizationItem } from "./JoinedOrganizationItem";

const JoinedOrganizationList = () => {
  const { isLoaded, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!isLoaded) {
    return <>Loading...</>;
  }


  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <JoinedOrganizationItem
          key={mem.organization.id}
          id={mem.organization.id}
          imageUrl={mem.organization.imageUrl}
          name={mem.organization.name}
        />
      ))}
    </ul> 
  );
};

export default JoinedOrganizationList;
