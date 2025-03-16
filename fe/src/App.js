import { memo } from "react";
import { useState } from "react";
import Content from "./Content";

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

  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 32 }}>    
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

      <div style={{ padding: 32}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}
      </div>
    </div>
  );
};

export default App;