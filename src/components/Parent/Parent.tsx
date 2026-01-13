import { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { providers } from "../../data/providers";
import { Search } from "../Search/search";

type Provider = {
    firstname?: string;
    lastname?: string;
    enabledforscheduling?: Boolean;
    npi: number | null;
}

const typedProviders: Provider[] = providers.map((p) => ({
    firstname: p.firstname,
    lastname: p.lastname,
    enabledforscheduling: p.enabledforscheduling,
    npi: p.npi,
}));

const delay = 500;

export const Parent = () => {
    const [data, setData] = useState<Provider[]>(typedProviders);
    const { search } = useSearch();

    useEffect(() => {
        if (search) {
            const timer = setTimeout(() => {
                setData(data.filter((d) => `${d.firstname}${d.lastname}`.trim().toLowerCase().includes(search.trim().toLowerCase())));
            }, delay);
            return () => clearTimeout(timer);
        } else {
            setData(typedProviders);
        }
    }, [search]);

    return (
        <>
            <h1 className="text-3xl font-bold">Providers</h1>
            <Search />
            {
                data.map((p) => <p key={p.npi}>{p.firstname} {p.lastname} enabled: {p.enabledforscheduling ? 'true' : 'false'}</p>)
            }
        </>
    )
};
