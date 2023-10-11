import CONFIG from "../CONFIG";
import currencies from "../currencies";
import type { CurrencyCode } from "../types";
import cachedFetch from "../utils/cachedFetch";

// TODO: add proper typing to currency code;
export default async function fetchRate(curCode: CurrencyCode) {
  let res = await cachedFetch(CONFIG.baseUrl + curCode);
  if (res && res["conversion_rates"]) {
    return res["conversion_rates"] as Record<CurrencyCode, number>[];
  }
  return null;
}
