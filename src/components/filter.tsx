type FilterProps = {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Filter({ filters, setFilters }: FilterProps) {
  const removeFilter = (filter: string) => {
    setFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div className="flex w-full items-center justify-between gap-10 rounded-[5px] bg-white px-7 py-5 shadow-custom">
      <div className="flex flex-wrap items-center gap-4">
        {filters.map((filter) => (
          <div
            className="flex w-auto items-center gap-2 overflow-hidden rounded-sm bg-lightGrayish-filterTablets"
            key={filter}
          >
            <span className="ml-2 font-bold text-primary">{filter}</span>{" "}
            <button
              className="min-h-full bg-primary px-3 py-1 text-sm font-bold text-white transition-colors duration-200 hover:bg-veryDarkGrayish"
              onClick={() => removeFilter(filter)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button
        className="font-bold text-primary transition-all duration-300 hover:underline"
        onClick={() => {
          setFilters([]);
          console.log("Clearing filters");
        }}
      >
        Clear
      </button>
    </div>
  );
}
