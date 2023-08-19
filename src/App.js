import Carrousel from "./Carrousel";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Carrousel
        elements={[
          "https://littlevisuals.co/images/AE1.jpg",
          "https://littlevisuals.co/images/747.jpg",
          "https://littlevisuals.co/images/Njoror.jpg"
        ]}
      />
    </div>
  );
}
