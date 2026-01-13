import { useEffect, useState } from 'react';
import { providers } from '../data/providers';
import './App.css';
import { Search } from '../components/search/search';

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

function App() {
  const [data, setData] = useState<Provider[]>(typedProviders);
  const [search, setSearch] = useState<string>('');
  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    if (search) {
      setData(data.filter((d) => `${d.firstname}${d.lastname}`.trim().toLowerCase().includes(search)));
    } else {
      setData(typedProviders);
    }
  }, [search]);

  return (
    <>
      <h1 className="text-3xl font-bold">Providers</h1>
      <Search
        value={search}
        setSearch={handleSearch}
      ></Search>
      {
        data.map((p) => <p key={p.npi}>{p.firstname} {p.lastname} enabled: {p.enabledforscheduling ? 'true' : 'false'}</p>)
      }
    </>
  )
}

export default App
