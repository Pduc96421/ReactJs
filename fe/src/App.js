import { memo } from "react";
import { useState } from "react";
import Content from "./components/Content";
import UseRef from "./components/useRef";
import UseMemo from "./components/useMemo";


const courses = [
  {
    id: 1,
    name: 'html, css'
  },
  {
    id: 2,
    name: 'js'
  },
  {
    id: 3,
    name: 'reactJs'
  }
]

const App = () => {
  const [checked, setChecked] = useState([]);
  const [show, setShow] = useState(false);
  const [showUseRef, setShowUseRef] = useState(false);
  const [showUseMemo, setShowUseMemo] = useState(false);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if(isChecked){
        return checked.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    })
  }

  const handleSubmit = () => {
    // call api
    console.log({ id: checked });
  }


  return (
    <div style={{ padding: 10}}>    
      <div>
        {courses.map(course => (
          <div key={course.id}>
            <input 
              type="checkbox" 
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            /> {course.name}
          </div>
        ))}
      <button onClick={handleSubmit}>Register</button>
      </div>

      <div style={{ padding: 10}}>
        <button onClick={() => setShow(!show)}>useEffect</button>
        {show && <Content />}
      </div>

      <div style={{ padding: 10}}>
        <button onClick={() => setShowUseRef(!showUseRef)}>useRef</button>
        {showUseRef && <UseRef />}
      </div>

      <div style={{ padding: 10}}>
        <button onClick={() => setShowUseMemo(!showUseMemo)}>UseMemo</button>
        {showUseMemo && <UseMemo />}
      </div>

    </div>
  );
};

export default App;