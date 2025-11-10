import PORTFOLIOS from "@/data/portfolios";

export interface Portfolio {
  name: string;
  url: string;
  displayUrl: string;
  graduationYear: number;
  major: string;
}

function normalizeAndValidateUrl(
  url: string,
): { fullUrl: string; displayUrl: string } | null {
  try {
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      cleanUrl = `https://${cleanUrl}`;
    }

    const urlObj = new URL(cleanUrl);
    if (urlObj.protocol === "http:") {
      urlObj.protocol = "https:";
    }

    let hostname = urlObj.hostname.toLowerCase();
    if (hostname.startsWith("www.")) {
      hostname = hostname.slice(4);
    }

    const displayUrl = hostname;
    const fullUrl = `https://${hostname}`;

    return { fullUrl, displayUrl };
  } catch {
    return null;
  }
}

export function getPortfolios(): Portfolio[] {
  return PORTFOLIOS.map((portfolio) => {
    const normalized = normalizeAndValidateUrl(portfolio.url);

    if (!normalized) {
      return null;
    }

    return {
      ...portfolio,
      url: normalized.fullUrl,
      displayUrl: normalized.displayUrl,
    };
  }).filter((portfolio): portfolio is Portfolio => portfolio !== null);
}
