import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cnt, setCnt] = useState(1);

  const handleName = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    console.log(document);
    document.title = `your clicked ${cnt} times!`
  }, [cnt])

  return <div className="App">
    <input 
      type="text"
      placeholder="Enter your name"
      onChange={handleName}
      value={name}
    />
    <h2>hello! {name || ""}</h2>

    <button onClick={() => setCnt(cnt + 1)} >click em!</button>
    <h2>you clicked {cnt} times!</h2>
    <title></title>
  </div>;
}
