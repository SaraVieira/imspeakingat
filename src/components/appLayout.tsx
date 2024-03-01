import { useEffect } from "react";
import { MainNav } from "./mainnav";
import { UserNav } from "./usermenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-col border-b px-4">
        <div className="container m-auto flex h-16 items-center ">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <main className="container mx-auto mt-12 flex h-full grow flex-col">
        {children}
      </main>
    </div>
  );
};
