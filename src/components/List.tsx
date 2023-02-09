import { useState } from "react";

type ListProps = {
  initialItems: string[];
};

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  function addToList() {
    setList((state) => [...state, newItem]);
  }

  function removeFromList(textName: string) {
    setList((state) => state.filter((item) => item !== textName));
  }

  return (
    <>
      <input
        value={newItem}
        placeholder="Novo item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((textName) => (
          <li key={textName}>
            {textName}
            <button onClick={() => removeFromList(textName)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
