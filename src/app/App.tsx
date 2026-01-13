import { useEffect, useState } from 'react';
import './App.css'

interface Patient {
  id: string,
  name: string,
  age: number,
  status: "active" | "inactive",
}

const patients: Patient[] = [
  { id: "1", name: "Alice Johnson", age: 34, status: "active" },
  { id: "2", name: "Bob Smith", age: 58, status: "inactive" },
  { id: "3", name: "Charlie Davis", age: 42, status: "active" },
];

function App() {
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState(patients.length ? patients : []);

  useEffect(() => {
    if (search) {
      let f = patients.filter((p) => `${p.name}${p.age}${p.status}`.trim().toLowerCase().includes(search));
      setFilteredItems(f);
    } else {
      setFilteredItems(patients);
    }
  }, [search]);

  return (
    <>
      <h1>Patients</h1>
      <input
        type="text"
        onChange={(e) => setTimeout(() => setSearch(e.target.value.toLowerCase()), 500)}
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
      ></input>
      { filteredItems.map((patient) =>
        <div key={patient.id}>
          <p>{patient.name}, {patient.age}, {patient.status}</p>
        </div>
      )}
    </>
  )
}

export default App
