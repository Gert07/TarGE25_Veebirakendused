import { useState } from 'react';
import * as api from "./api/itemsApi";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import './App.css'

export default function App() {

  const [items, setItems] = useState<any[]>([])
  const load = async() => {
    const res = await api.fetchItems();
    setItems(res.data);
  }

  return (
    <div>
      <h1>My Data App</h1>
      <ItemForm onAdd={async (name: string) => { await api.createItem(name); load(); }}/>
      <ItemList items={items} onDelete={async (id: number) => { await api.deleteItem(id); load(); }} />
    </div>
  );
}