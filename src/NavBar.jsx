import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2>🍓 Fruit App</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/apple" style={styles.link}>Apple</Link>
        <Link to="/mango" style={styles.link}>Mango</Link>
        <Link to="/watermelon" style={styles.link}>Watermelon</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "green",
    color: "white"
  },
  link: {
    color: "white",
    margin: "0 10px",
    textDecoration: "none"
  }
};

export default NavBar;
