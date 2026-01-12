import { ItemList } from '../components/ItemList'
import './App.css'
import type { Provider } from './types'
import { SearchBar } from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { DetailView } from '../components/DetailView'
import getProviders from '../api/providers'

function App() {
    const [failure, setFailure] = useState(false);
    const [refresh, setRefresh] = useState(false);
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
      setProviders([]);
      if (failure) {
        alert('Simulated API failure!');
      } else {
        async function loadProviders() {
          const data = await getProviders();
          setProviders(data);
        }
        loadProviders();
      }
  }, [refresh]);

  return (
    <>
      <p>Provider ID: {providerId}</p>
      <h1 className="text-3xl font-bold">Providers</h1>
      <div>
        <SearchBar
          id="provider-search"
          placeholder="Search providers..."
          setQuery={setQuery}
          value={query}
        />
        <div>
          <input type="checkbox" id="apiFailure" name="apiFailure" checked={failure} onChange={() => setFailure(!failure)} />
          <label htmlFor="apiFailure">API failure</label>
        </div>
        <button onClick={() => { setRefresh(!refresh) }}>Refresh API</button>
      </div>
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
