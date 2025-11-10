"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { useState, useMemo } from "react";
import type { Portfolio } from "@/lib/get-portfolios";

export function PortfolioSearch({ portfolios }: { portfolios: Portfolio[] }) {
  const [search, setSearch] = useState("");

  const filteredPortfolios = useMemo(() => {
    if (!search) return portfolios;
    return portfolios.filter((portfolio) =>
      portfolio.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, portfolios]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="relative mt-8">
        <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={handleSearch}
          placeholder="Search for a person..."
          className="placeholder:font-mono pl-8"
        />
      </div>
      <p className="text-xs pl-2.5 mt-2">
        <span className="text-foreground font-medium">
          {filteredPortfolios.length}
        </span>{" "}
        <span className="text-muted-foreground font-mono">
          {filteredPortfolios.length === 1 ? "portfolio" : "portfolios"}
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {filteredPortfolios.map((portfolio) => (
          <div
            key={portfolio.url}
            className="border inline-flex p-4 bg-secondary/35 flex-col"
          >
            <div>
              <h3 className="text-lg">{portfolio.name}</h3>
              <Link
                href={portfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex gap-1 text-sm underline underline-offset-4 decoration-border hover:decoration-accent-foreground transition-colors duration-200"
              >
                {portfolio.displayUrl}
                <svg
                  className="mt-0.5 size-3.5 -translate-x-1.5 group-hover:-translate-x-0.5 transition duration-200 opacity-0 group-hover:opacity-100 ease-out"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>External link</title>
                  <path
                    d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                    fill="var(--grey1)"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="uppercase font-mono text-[10px] text-muted-foreground tracking-wide">
                  Graduation Year
                </p>
                <p className="text-lg">{portfolio.graduationYear}</p>
              </div>
              <div>
                <p className="uppercase font-mono text-[10px] text-muted-foreground tracking-wide">
                  Major
                </p>
                <p className="text-lg line-clamp-1">{portfolio.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
