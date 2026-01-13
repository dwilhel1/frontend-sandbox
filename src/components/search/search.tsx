import type { FC } from "react";

interface Props {
    value?: string,
    setSearch: (arg0: string) => void;
}

const Search: FC<Props> = ({ value = '', setSearch }) => {

    return (
        <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        value={value}
        type="text">
      </input>
    )
};

export { Search };