import { useState } from "react";

function App() {
  const [valumu, setValumu] = useState(["krishna", "om", "rahul"]);
  const clickm = (e) => {
    if (e.key === 'Enter') {
        setValumu([...valumu, e.target.value]);
        e.target.value = '';
    }
  };

  return (
    <>
      <ul>
        {valumu.map((name) => (
          <li >{name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Type your name"
        onKeyDown={clickm}
      />              
    </>
  );
}

export default App;
