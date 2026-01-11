import { ItemList } from '../components/ItemList'
import './App.css'
import providers from '../data/providers.json'
import type { Provider } from './types'
import { SearchBar } from '../components/SearchBar'
import { useState } from 'react'

const items: Provider[] = providers.providers;

function App() {
  const [query, setQuery] = useState('');
  const filteredItems = query ? items.filter((row) => {
    if (row.firstname.toLowerCase().includes(query.toLowerCase()) ||
        row.lastname.toLowerCase().includes(query.toLowerCase())) {
          console.log('matched: ', row.firstname, ' ', row.lastname);
      return row;
    }

    return;
  }) : items;

  return (
    <>
      <h1 className="text-3xl font-bold">Providers</h1>
      <SearchBar
        id="provider-search"
        placeholder="Search providers..."
        setQuery={setQuery}
        value={query}
      />
      <ItemList items={filteredItems}/>
    </>
  )
}

export default App
