import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(key) {
    setItems(items.filter((item) => item.key != key));
  }

  function handleClearList() {
    return setItems([]);
  }
  function handleUpdateItem(key) {
    return setItems(
      items.map((item) =>
        item.key == key ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <>
      <Header />
      <Form onnAddItem={handleAddItem} onnClearList={handleClearList} />
      <List
        item={items}
        onnDeleteItem={handleDeleteItem}
        onnUpdateItem={handleUpdateItem}
      />
    </>
  );
}

function Header() {
  return <h1>Todo List</h1>;
}

function Form({ onnAddItem, onnClearList }) {
  const [text, setText] = useState([]);
  console.log(text);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (text.length === 0) {
      alert("Lütfen bir görev giriniz...");
    } else {
      onnAddItem({ key: Date.now(), completed: false, text });
    }
    setText([]);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Lütfen görev giriniz."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Ekle</button>
        <button type="button" onClick={onnClearList}>
          Temizle
        </button>
      </form>
    </>
  );
}

function List({ item, onnDeleteItem, onnUpdateItem }) {
  return (
    <>
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            onnDeleteItem={onnDeleteItem}
            onnUpdateItem={onnUpdateItem}
          />
        ))}
      </ul>
    </>
  );
}

function Item({ item, onnDeleteItem, onnUpdateItem }) {
  return (
    <>
      <div className="container">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onnUpdateItem(item.key)}
        />
        <li key={item.key}>
          <span
            style={item.completed ? { textDecoration: "line-through" } : {}}
          >
            {item.text}
          </span>
          <button onClick={() => onnDeleteItem(item.key)}>X</button>
        </li>
      </div>
    </>
  );
}

export default App;
