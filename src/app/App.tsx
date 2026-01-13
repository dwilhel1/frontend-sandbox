import './App.css';
import { SearchProvider } from '../providers/SearchProvider';
import { Parent } from '../components/Parent/Parent';

function App() {

  return (
    <SearchProvider>
      <Parent/>
    </SearchProvider>
  )
}

export default App
