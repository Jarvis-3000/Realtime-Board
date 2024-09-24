"use client";

import { Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../../../components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Invite User
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit rounded-lg bg-white border p-0">
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
