import { GitHubIcon } from "~/components/icons/github";
import { LinkedinIcon } from "~/components/icons/linkedin";
import { MastodonIcon } from "~/components/icons/mastadon";
import { ThreadsIcon } from "~/components/icons/threads";
import { XIcon } from "~/components/icons/x";

interface SocialLinksProps {
  socials: {
    github: string | null;
    x: string | null;
    threads: string | null;
    linkedin: string | null;
    mastodon: string | null;
  };
}

export const SocialLinks = ({ socials }: SocialLinksProps) => (
  <ul className="mt-7 space-y-2 sm:mt-0">
    {socials?.github && (
      <li>
        <a
          target="_blank"
          className=" flex items-center gap-2 underline"
          href={`https://github.com/${socials.github}`}
        >
          <GitHubIcon className="mx-0" /> {socials.github}
        </a>
      </li>
    )}
    {socials?.x && (
      <li>
        <a
          target="_blank"
          className="flex items-center gap-2 underline"
          href={`https://x.com/${socials.x}`}
        >
          <XIcon className="mx-0 h-4 w-4 fill-current" /> {socials.x}
        </a>
      </li>
    )}
    {socials?.threads && (
      <li>
        <a
          target="_blank"
          className="flex items-center gap-2 underline"
          href={`https://threads.net/@${socials.threads}`}
        >
          <ThreadsIcon className="mx-0 h-4 w-4 fill-current" />{" "}
          {socials.threads}
        </a>
      </li>
    )}
    {socials?.linkedin && (
      <li>
        <a
          target="_blank"
          className="flex items-center gap-2 underline"
          href={`https://www.linkedin.com/in/${socials.linkedin}`}
        >
          <LinkedinIcon className="h-4 w-4 " /> {socials.linkedin}
        </a>
      </li>
    )}
    {socials?.mastodon && (
      <li>
        <a
          target="_blank"
          className=" flex items-center gap-2 underline"
          href={`${socials?.mastodon}`}
        >
          <MastodonIcon className="mx-0 h-4 w-4 fill-current" />{" "}
          {socials?.mastodon}
        </a>
      </li>
    )}
  </ul>
);
