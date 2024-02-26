import { MainNav } from "./mainnav";
import { UserNav } from "./usermenu";

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="container m-auto flex h-16 items-center border-b px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-col">{children}</div>
    </>
  );
};
