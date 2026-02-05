import { useState, useEffect } from "react";

function FetchData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      {user.map(item => (
        <p key={item.id}>{item.name}{item.email}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <FetchData />
  );
}

export default App;
