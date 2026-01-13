import type { FC } from "react";
import { useSearch } from "../../hooks/useSearch";

const Search: FC = () => {
    const { search, setSearch } = useSearch();

    return (
        <input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text">
        </input>
    )
};

export { Search };