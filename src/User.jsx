import { useState } from "react";

function User() {
  const [user, setUser] = useState("sam");

  return (
    <div>
      User Name
      <input type="text" value={user}
       onChange={(e) => setUser(e.target.value)} />
      <p>Hello {user}</p>
    </div>
  );
}

export default User;
