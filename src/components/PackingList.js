import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleClear,
  handlePack,
  handleDelete,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortByedItems = [...items];
  if (sortBy === "description") {
    sortByedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortByedItems.sort((a, b) => a.packed - b.packed);
  } else if (sortBy === "quantity") {
    sortByedItems.sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div className="list">
      <ul>
        {sortByedItems.map((el) => (
          <Item
            handlePack={handlePack}
            handleDelete={handleDelete}
            item={el}
            key={el.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">SortBy by input order</option>
          <option value="description">SortBy by description</option>
          <option value="packed">SortBy by packed status</option>
          <option value="quantity">SortBy by quantity</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}
