import Image from "next/image";
import Link from "next/link";
import { getPortfolios } from "@/lib/get-portfolios";
import { PortfolioSearch } from "@/components/portfolio-search";

const portfolios = getPortfolios().sort(
  (a, b) => a.graduationYear - b.graduationYear,
);

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto">
      <div>
        <div className="flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <p className="text-center font-mono mt-10 max-w-lg  mx-auto">
          A curated webring of personal websites from current and past UBC
          students inspired by{" "}
          <Link
            href="se-webring.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-border hover:decoration-accent-foreground transition-colors duration-200"
          >
            SE Webring
          </Link>
          .
        </p>
      </div>
      <PortfolioSearch portfolios={portfolios} />
    </main>
  );
}
