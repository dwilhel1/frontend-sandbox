import { ItemList } from '../components/ItemList'
import './App.css'
import type { Provider } from './types'
import { SearchBar } from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { DetailView } from '../components/DetailView'
import getProviders from '../api/providers'

function App() {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [query, setQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [providerId, setProviderId] = useState<number | null>(null);
    const filteredItems = query ? providers.filter((row) => {
      if (row.firstname.toLowerCase().includes(query.toLowerCase()) ||
          row.lastname.toLowerCase().includes(query.toLowerCase())) {
        return row;
      }
      return;
    }) : providers;
    const onRowClick = (id: number) => () => {
      setProviderId(id);
      setModalOpen(true);
    };

    useEffect(() => {
      async function loadProviders() {
        const data = await getProviders();
        setProviders(data);
      }

      loadProviders();
  }, []);

  return (
    <>
      <p>Provider ID: {providerId}</p>
      <h1 className="text-3xl font-bold">Providers</h1>
      <SearchBar
        id="provider-search"
        placeholder="Search providers..."
        setQuery={setQuery}
        value={query}
      />
      { providers.length === 0 ? <p>Loading providers...</p> : <ItemList items={filteredItems} onRowClick={onRowClick}/> }
      { modalOpen ? <DetailView
        onClose={() => { setModalOpen(false); setProviderId(null); }}
        content={providers.find(provider => provider.providerid === providerId)?.firstname || 'No details available'}
        title={`Provider ID: ${providerId}`}
      /> : null}
    </>
  )
}

export default App
