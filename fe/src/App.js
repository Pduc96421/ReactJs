import { useState } from "react";
import Content from "./components/Content";
import UseRef from "./components/useRef";
import UseMemo from "./components/useMemo";
import UseReducer from "./components/Todo/useReducer";
import UseContext from "./components/context/useContext";

import { useStore, actions } from './store'

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
  const [showUseReducer, setShowUseReducer] = useState(false);
  const [showUseContext, setShowUseContext] = useState(false);

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

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;

  const handleAdd = () => {
    dispatch(actions.addTodoInput(todoInput));
    dispatch(actions.setTodoInput(''));
  }

  return (
    <>
      <div style={{ padding: 10 }}>    
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

        <div style={{ padding: 10}}>
          <button onClick={() => setShowUseReducer(!showUseReducer)}>UseReducer</button>
          {showUseReducer && <UseReducer />}
        </div>

        <div style={{ padding: 10}}>
          <button onClick={() => setShowUseContext(!showUseContext)}>UseContext</button>
          {showUseContext && <UseContext />}
        </div>

      </div>

      <div>
        <input 
          value={todoInput}
          placeholder="Enter Todo..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        />
        <button onClick={handleAdd}>ADD</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <span onClick={() => dispatch(actions.deleteTodoInput())}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;