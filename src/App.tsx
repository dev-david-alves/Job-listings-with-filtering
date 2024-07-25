import Job from "./components/job";
import Filter from "./components/filter";
import { useState } from "react";
import data from "./utils/data.json";
import Header from "./components/header";
import clsx from "clsx";

export type TJob = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export default function Home() {
  const [filters, setFilters] = useState<string[]>([]);

  if (!data) {
    return <div>Loading...</div>;
  }

  let filteredData = data;

  // if (filters.length > 0) {
  //   filters.forEach((filter) => {
  //     filteredData = filteredData.filter(
  //       (job) =>
  //         job.role === filter ||
  //         job.level === filter ||
  //         job.languages.includes(filter) ||
  //         job.tools.includes(filter),
  //     );
  //   });
  // }

  return (
    <div className="w-full">
      <Header>
        {filters.length > 0 && (
          <Filter filters={filters} setFilters={setFilters} />
        )}
      </Header>
      <main
        className={clsx(
          "flex w-full flex-col items-center justify-center gap-10 bg-lightGrayish-background px-6 py-10 md:gap-6 md:px-10 lg:px-20",
          filters.length == 0 && "pt-20",
        )}
      >
        {filteredData &&
          filteredData.map((job: TJob) => (
            <Job job={job} key={job.id} setFilters={setFilters} />
          ))}
      </main>
    </div>
  );
}
