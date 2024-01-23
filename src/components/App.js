import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
  ]);

  const handleAddItems = (item) => {
    setItems((items) => [
      ...items,
      {
        ...item,
        id: items.length === 0 ? 1 : items[items.length - 1].id + 1,
      },
    ]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((el) => el.id !== id));
  };
  const handlePack = (id) => {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  };
  const handleClear = () => {
    const answer = window.confirm("are you sure you want to delete all items?");
    if (answer) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handlePack={handlePack}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
