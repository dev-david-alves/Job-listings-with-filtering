import React from "react";

type BadgeProps = {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  text: string;
};

export default function Badge({ setFilters, text }: BadgeProps) {
  const handleUpdateFilter = () => {
    setFilters((prev) => {
      if (prev.includes(text)) return prev;
      return [...prev, text];
    });
  };

  return (
    <button
      className="rounded-sm bg-lightGrayish-filterTablets px-2 py-1 font-bold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
      onClick={handleUpdateFilter}
    >
      {text}
    </button>
  );
}
