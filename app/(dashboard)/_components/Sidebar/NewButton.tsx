"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Hint from "@/components/ui/hint";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Add Organization">
            <button className="h-full w-full flex justify-center items-center bg-white/25 opacity-70 hover:opacity-100 rounded-lg">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[500px] rounded-lg bg-white border-none p-0">
        <CreateOrganization
          appearance={{
            elements: {
              rootBox: "w-full bg-transparent",
              cardBox: "shadow-none w-full ",
              headerTitle: "text-xl",
              formButtonPrimary:
                "shadow-none bg-blue-500 hover:bg-blue-700 font-semibold p-2",
              card: "shadow-none ",
              footer: "hidden",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
