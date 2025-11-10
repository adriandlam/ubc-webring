import { Portfolio } from "@/lib/get-portfolios";

const PORTFOLIOS: Omit<Portfolio, "displayUrl">[] = [
  {
    name: "Adrian Lam",
    url: "http://www.adriandlam.com",
    graduationYear: 2026,
    major: "Mathematics",
  },
  {
    name: "Cole Andrae",
    url: "http://www.coleandrae.com",
    graduationYear: 2027,
    major: "Computer Science + Bio",
  },
  {
    name: "Shubhaankar Sharma",
    url: "http://www.shubhaankar.com",
    graduationYear: 2026,
    major: "Computer Science",
  },
  {
    name: "Mohith Baskaran",
    url: "https://mohithbaskaran.vercel.app",
    graduationYear: 2026,
    major: "Statistics",
  },
  {
    name: "Ryan Hararki",
    url: "https://www.haraki.org",
    graduationYear: 2026,
    major: "Business + Computer Science",
  },
];

export default PORTFOLIOS;
