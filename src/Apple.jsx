import appleImg from "./assets/apple.jpg";

function Apple() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Apple 🍎</h1>
      <img src={appleImg} width="250" />
      <p>Apples are rich in fiber.</p>
    </div>
  );
}

export default Apple;
