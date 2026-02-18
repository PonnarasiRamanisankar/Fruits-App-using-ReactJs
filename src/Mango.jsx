import mangoImg from "./assets/mango.jpg";

function Mango() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mango 🥭</h1>
      <img src={mangoImg} width="250" />
      <p>Mango is the most delicious  fruits.</p>
    </div>
  );
}

export default Mango;
