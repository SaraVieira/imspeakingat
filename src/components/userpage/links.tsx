import { User } from "@prisma/client";
import { GitHubIcon } from "~/components/icons/github";
import { LinkedinIcon } from "~/components/icons/linkedin";
import { MastodonIcon } from "~/components/icons/mastadon";
import { ThreadsIcon } from "~/components/icons/threads";
import { XIcon } from "~/components/icons/x";

export const SocialLinks = ({ user }: { user: User }) => (
  <ul className="mt-7 space-y-2 sm:mt-0">
    {user?.github && (
      <li>
        <a
          target="_blank"
          className=" flex items-center gap-2 underline"
          href={`https://github.com/${user.github}`}
        >
          <GitHubIcon className="mx-0" /> {user.github}
        </a>
      </li>
    )}
    {user?.x && (
      <li>
        <a
          target="_blank"
          className="flex items-center gap-2 underline"
          href={`https://x.com/${user.x}`}
        >
          <XIcon className="mx-0 h-4 w-4 fill-current" /> {user.x}
        </a>
      </li>
    )}
    {user?.threads && (
      <li>
        <a
          target="_blank"
          className="flex items-center gap-2 underline"
          href={`https://threads.net/@${user.threads}`}
        >
          <ThreadsIcon className="mx-0 h-4 w-4 fill-current" /> {user.threads}
        </a>
      </li>
    )}
    {user?.linkedin && (
      <li>
        <a
          target="_blank"
          className="flex items-center gap-2 underline"
          href={`https://www.linkedin.com/in/${user.linkedin}`}
        >
          <LinkedinIcon className="h-4 w-4 " /> {user.linkedin}
        </a>
      </li>
    )}
    {user?.mastodon && (
      <li>
        <a
          target="_blank"
          className=" flex items-center gap-2 underline"
          href={`${user?.mastodon}`}
        >
          <MastodonIcon className="mx-0 h-4 w-4 fill-current" />{" "}
          {user?.mastodon}
        </a>
      </li>
    )}
  </ul>
);
