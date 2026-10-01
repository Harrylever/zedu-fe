import { Metadata } from "next";
import { siteUrl } from "~/lib/env-urls";
import { ContributorCard } from "./_components/contributor-card";
import { contributors, TEAM_NAME } from "./_lib/contributors";

export const metadata: Metadata = {
  title: `Team ${TEAM_NAME} Contributors`,
  description: `The members of Team ${TEAM_NAME} who contributed to Zedu during HNG 15.`,
  alternates: {
    canonical: siteUrl("/contributors/heron"),
  },
};

const sortedContributors = [...contributors].sort((a, b) =>
  a.name.localeCompare(b.name)
);

const HeronContributorsPage = () => {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-center gap-4 px-4 py-10 text-center sm:gap-6 sm:px-8 sm:py-16">
      <h1 className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
        Team <span className="text-primary-500">{TEAM_NAME}</span> Contributors
      </h1>
      <p className="max-w-xl text-sm text-neutral-600 sm:text-base">
        The people who set up, ran and improved Zedu as Team {TEAM_NAME} during
        HNG 15.
      </p>
      <p className="text-sm font-medium text-neutral-500">
        {sortedContributors.length}{" "}
        {sortedContributors.length === 1 ? "contributor" : "contributors"}
      </p>
      <ul className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedContributors.map((contributor) => (
          <ContributorCard key={contributor.name} {...contributor} />
        ))}
      </ul>
    </section>
  );
};

export default HeronContributorsPage;
