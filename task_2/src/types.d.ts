import type currencies from "./currencies";

export type CurrencyCode = (typeof currencies)[number]["id"];
