import type { FC } from 'react';

interface Props {
    id: string,
    placeholder?: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    value: string,
}

export const SearchBar: FC<Props> = ({ id, placeholder='Search...', setQuery, value }) => (
    <input
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={(e) => setQuery(e.target.value)}
        value={value}
    ></input>
);
