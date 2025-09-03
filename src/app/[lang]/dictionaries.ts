import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((mod) => mod.default),
  id: () => import("./dictionaries/id.json").then((mod) => mod.default),
};

export const getDictionary = async (locale: "en" | "id") =>
  dictionaries[locale]();
