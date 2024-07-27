"use client";

import { TJob } from "../App";
import Badge from "./badge";

type JobProps = {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  job: TJob;
};

export default function Job({ job, setFilters }: JobProps) {
  const {
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  return (
    <div className="flex w-full min-w-full flex-col items-center justify-between gap-6 rounded-[5px] border-l-4 border-primary bg-white px-7 py-8 shadow-custom md:flex-row md:py-5">
      <div className="relative flex w-full flex-col gap-4 md:flex-row md:items-center">
        <img
          src={import.meta.env.BASE_URL + logo}
          alt={company}
          className="absolute -top-[55px] h-[50px] w-[50px] rounded-full md:relative md:top-0 md:h-[75px] md:w-[75px]"
        />
        <div className="flex flex-col gap-2 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="font-bold text-primary">{company}</span>
            <div className="flex items-center gap-1">
              {isNew && (
                <span className="rounded-full bg-primary px-2 py-1 text-center text-xs text-white">
                  NEW!
                </span>
              )}
              {isFeatured && (
                <span className="rounded-full bg-black px-2 py-1 text-center text-xs text-white">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <span className="transition-color text-md cursor-pointer font-bold text-veryDarkGrayish duration-200 hover:text-primary md:text-lg">
            {position}
          </span>
          <div className="flex w-fit items-center gap-4 text-sm font-bold text-darkGrayish">
            <span>{postedAt}</span>
            <span>&middot;</span>
            <span>{contract}</span>
            <span>&middot;</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <hr className="w-full border-darkGrayish md:hidden" />
      <div className="flex w-full flex-wrap items-center gap-4 md:justify-end">
        <Badge text={role} setFilters={setFilters} />
        <Badge text={level} setFilters={setFilters} />
        {languages.map((language) => (
          <Badge key={language} text={language} setFilters={setFilters} />
        ))}
        {tools.map((tool) => (
          <Badge key={tool} text={tool} setFilters={setFilters} />
        ))}
      </div>
    </div>
  );
}
