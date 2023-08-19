import { useState, useEffect } from "react";

export default function Carrousel({ elements }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const carrousel = document.getElementById("carrousel");

    carrousel.style.transform = `translateX(-${count * 400}px)`;
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px"
      }}
    >
      {/* prev button */}
      <div>
        <button
          onClick={() => {
            setCount((prev) => (prev > 0 ? prev - 1 : elements.length - 1));
            console.log(count);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "40px"
          }}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
      </div>
      {/* Carrousel */}
      <div
        style={{
          display: "flex",
          minHeight: "400px",
          alignItems: "center",
          justifyContent: "start",
          maxWidth: "400px",
          gap: "50px",
          overflow: "hidden"
        }}
      >
        {/* AGREGAR MAP DE ARRAY DE URLs */}
        <div
          id="carrousel"
          style={{
            display: "flex",
            transitionProperty: "all",
            transitionDuration: ".5s",
            transitionTimingFunction: "ease-in-out"
          }}
        >
          {elements.map((element, index) => {
            return (
              <img src={elements[index]} width="400px" alt="img" key={index} />
            );
          })}
        </div>
      </div>
      {/* next button */}
      <div>
        <button
          onClick={() => {
            setCount((prev) => (prev < elements.length - 1 ? prev + 1 : 0));
            console.log(count);
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "40px"
          }}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
