export type Contributor = {
  name: string;
  role?: string;
  github?: string;
};

export const TEAM_NAME = "Heron";

// To add yourself: copy one entry, fill in your details, and open a PR into devbranch.
// `role` and `github` (username only, no URL) are optional. Order doesn't matter:
// the page sorts by name, so add your entry anywhere.
export const contributors: Contributor[] = [
  {
    name: "Tolulope Ogungbemi",
    role: "Team Lead",
    github: "dav3exe",
  },
];
