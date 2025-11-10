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
        <span className="text-muted-foreground font-mono">portfolios</span>
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
                className="group inline-flex items-center gap-1 text-sm underline underline-offset-4 decoration-border hover:decoration-accent-foreground transition-colors duration-200"
              >
                {portfolio.displayUrl}
                <svg
                  className="-translate-x-1 group-hover:translate-x-0 transition duration-200 opacity-0 group-hover:opacity-100 ease-out"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>External link</title>
                  <path
                    d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
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
