"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyOrg";
import { BoardList } from "./_components/BoardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();

  return (
    <div className="h-full w-full text-black">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
