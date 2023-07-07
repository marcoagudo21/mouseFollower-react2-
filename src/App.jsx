import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (enabled) {
      document.body.classList.add("no-cursor");
    }

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log(event);
      setPosition({
        x: clientX,
        y: clientY,
      });
    };
    console.log("effect", { enabled });
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: "0.8",
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
          display: !enabled ? "none" : "block",
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

export default App;
