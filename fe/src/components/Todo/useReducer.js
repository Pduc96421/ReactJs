import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, deleteJob, setJob } from './actions'

// useReducer
// 1. Init State:
// 1. Actions: up (state + 1) / Down (state - 1)
// 3. reducer
// 4. Dispatch

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();

  const {job, jobs} = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));

    inputRef.current.focus();
  }

  return (
    <>
      <div style={{ padding: '0 20px' }}>
        <h3>Todo</h3>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button onClick={handleSubmit}>ADD</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob())}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UseReducer;