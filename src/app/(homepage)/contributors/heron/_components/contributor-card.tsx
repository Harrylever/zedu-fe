import { Github } from "lucide-react";
import type { Contributor } from "../_lib/contributors";

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export const ContributorCard = ({ name, role, github }: Contributor) => {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-neutral-100 p-5 text-left">
      <div
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-base font-semibold text-white"
      >
        {getInitials(name)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-neutral-900">{name}</p>
        {role && <p className="truncate text-sm text-neutral-600">{role}</p>}
      </div>
      {github && (
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on GitHub`}
          className="shrink-0 rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
        >
          <Github size={20} />
        </a>
      )}
    </li>
  );
};
