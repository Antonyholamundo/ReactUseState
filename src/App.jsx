import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(["Proyecto Inicial"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <main className="hero">
      <div
        className="glass card"
        style={{
          padding: "3rem",
          textAlign: "center",
          width: "90%",
          maxWidth: "800px",
        }}
      >
        <h1>Mis Proyectos</h1>

        <form onSubmit={handleAddItem} className="form-group">
          <input
            type="text"
            placeholder="Nombre del proyecto..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            style={{ marginTop: 0, padding: "0.8rem 1.5rem" }}
          >
            Añadir
          </button>
        </form>

        <div className="list-container">
          {items.map((item, index) => (
            <div key={index} className="list-item">
              <span>{item}</span>
              <button
                className="delete-btn"
                onClick={() => handleRemoveItem(index)}
                title="Eliminar"
              >
                ✕
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <p style={{ marginTop: "1rem", fontSize: "1rem", opacity: 0.4 }}>
              No hay proyectos aún.
            </p>
          )}
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "0.8rem",
          }}
        >
          <span>Total: {items.length}</span>
          <span>•</span>
          <span>React Practice</span>
        </div>
      </div>
    </main>
  );
}

export default App;
