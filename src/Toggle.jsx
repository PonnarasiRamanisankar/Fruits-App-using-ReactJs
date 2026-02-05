import React, { useState } from 'react';

function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>

      {show && <h1>WELCOME TO KCE</h1>}
    </div>
    
  );
}

export default Toggle;
