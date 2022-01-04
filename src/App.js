import React, { useState } from "react";
import "./App.css";
import AddListItem from "./components/AddListItem/AddListItem";
import Header from "./components/Header";
import List from "./components/List/List";

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [list, setList] = useState([
    { id: 1, name: "Eau", quantity: 0 },
    { id: 2, name: "Lait", quantity: 25 },
    { id: 3, name: "Beurre", quantity: 100 },
    { id: 4, name: "Crème fraîche", quantity: 50 },
  ]);

  // Add listItem
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    setList([...list, newItem]);
  };
  // delete listItem
  const deleteItem = (id) => setList(list.filter((item) => item.id !== id));
  return (
    <div className="App">
      <Header />

      {list.length > 0 ? (
        <List list={list} onDelete={deleteItem} />
      ) : (
        <p>On a besoin de rien , placard remplie</p>
      )}

      {showAddItem && <AddListItem onAdd={addItem} />}
      <button onClick={() => setShowAddItem(!showAddItem)}>
        {showAddItem ? "fermer" : "Ajouter"}
      </button>
    </div>
  );
}

export default App;
