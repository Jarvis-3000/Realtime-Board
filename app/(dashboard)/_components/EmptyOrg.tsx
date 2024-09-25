import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-gray-400 flex flex-col items-center justify-center">
      <Image src="/elements.svg" height={300} width={300} alt="empty org" />
      <h1 className="text-2xl font-bold mt-5 mb-2">Welcome To Board</h1>
      <h2 className="mb-5">Create an organization to get started</h2>
      {/* Create Organization Button if no Organization is selected */}
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
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
      </div>
    </div>
  );
};

export default EmptyOrg;
