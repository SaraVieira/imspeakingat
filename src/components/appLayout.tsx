import { MainNav } from "./mainnav";
import { UserNav } from "./usermenu";

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col border-b px-4">
        <div className="container m-auto flex h-16 items-center ">
          <MainNav className="mx-6" />
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
