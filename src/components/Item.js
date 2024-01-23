export default function Item({
  handlePack,
  handleDelete,
  item: { id, description, quantity, packed },
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        checked={packed}
        onChange={() => handlePack(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
}
