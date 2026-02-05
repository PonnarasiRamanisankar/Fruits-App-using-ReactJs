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
        <p key={item.id}></p><P> {item.name}{item.email}</p>
      ))}
    </div>
  );
}

export default FetchData;
