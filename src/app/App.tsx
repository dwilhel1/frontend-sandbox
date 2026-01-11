import { ItemList } from '../components/ItemList/ItemList'
import './App.css'
import providers from '../data/providers.json'
import type { Provider } from './types'

const Providers: Provider[] = providers.providers

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold">Providers</h1>
      <ItemList items={Providers}/>
    </>
  )
}

export default App
