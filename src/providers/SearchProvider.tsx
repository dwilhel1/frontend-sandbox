import { useState } from "react";
import { SearchContext, type SearchContextValue } from "../contexts/search-context";

type SearchProviderProps = {
  children: React.ReactNode;
};

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState('');

  const value: SearchContextValue = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
