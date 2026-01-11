import { ItemList } from '../components/ItemList'
import './App.css'
import providers from '../data/providers.json'
import type { Provider } from './types'
import { SearchBar } from '../components/SearchBar'
import { useState } from 'react'
import { DetailView } from '../components/DetailView'

const items: Provider[] = providers.providers;

function App() {
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [providerId, setProviderId] = useState<number | null>(null);
  const filteredItems = query ? items.filter((row) => {
    if (row.firstname.toLowerCase().includes(query.toLowerCase()) ||
        row.lastname.toLowerCase().includes(query.toLowerCase())) {
      return row;
    }
    return;
  }) : items;
  const onRowClick = (id: number) => () => {
    setProviderId(id);
    setModalOpen(true);
  };

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
      <ItemList items={filteredItems} onRowClick={onRowClick}/>
      {modalOpen ? <DetailView
        onClose={() => { setModalOpen(false); setProviderId(null); }}
        content={items.find(item => item.providerid === providerId)?.firstname || 'No details available'}
        title={`Provider ID: ${providerId}`}
      /> : null}
    </>
  )
}

export default App
