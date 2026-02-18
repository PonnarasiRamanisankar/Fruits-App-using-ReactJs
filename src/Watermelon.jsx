import watermelonImg from "./assets/watermelon.jpg";

function Watermelon() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watermelon 🍉</h1>
      <img src={watermelonImg} width="250" />
      <p>Watermelon keeps you hydrated.</p>
    </div>
  );
}

export default Watermelon;
