export default function Stats({ items }) {
  const packedN = items.reduce((acc, el) => (el.packed ? acc + 1 : acc), 0);
  const packedPercentage = Math.round((packedN / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {items.length === 0
          ? "Start adding some items to your packing list 🚀"
          : packedN < items.length
          ? `💼 You have ${items.length} items on your list, and you already packed ${packedN} (${packedPercentage}%)`
          : `You got everything! Ready to go ✈️`}
      </em>
    </footer>
  );
}
