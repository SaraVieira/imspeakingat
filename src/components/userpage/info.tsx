import { type User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ReactCountryFlag from "react-country-flag";
import { SocialLinks } from "./links";
import { GitHubIcon } from "../icons/github";
import { Globe } from "lucide-react";

export const ProfileInfo = ({ user }: { user: User }) => {
  return (
    <>
      <Avatar className="h-32 w-32">
        {user?.image && (
          <AvatarImage src={user?.image} alt={user?.username ?? user.name!} />
        )}
        <AvatarFallback>
          {user?.username ? user.username[0] : user?.name}
        </AvatarFallback>
      </Avatar>
      <div className="mt-8 block grow items-center justify-between sm:mt-0 sm:flex">
        <div>
          <h2 className="block text-xl font-semibold">@{user?.username}</h2>
          <span>{user?.name}</span>
          <a
            target="_blank"
            className=" mt-4 flex items-center gap-2 underline"
            href={`${user.website}`}
          >
            <Globe className="mx-0 w-4" /> Website
          </a>
          <div>
            {user?.locationCode && (
              <ReactCountryFlag countryCode={user?.locationCode} />
            )}{" "}
            {user?.locationName}
          </div>
        </div>
        <SocialLinks user={user} />
      </div>
    </>
  );
};
