import { createContext } from "react";

export type SearchContextValue = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export { SearchContext };
