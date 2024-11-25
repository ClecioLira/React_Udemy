import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  // Começando com o useReducer
  let [number, dispatch] = useReducer((state, action) => {
    return Math.random(state) + 1;
  });

  // Avançando no useReducer
  const initialTask = [
    { id: 1, text: "fazer algo" },
    { id: 2, text: "fazer algo dois" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTask] = useReducer(taskReducer, initialTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTask({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTask({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>

      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <ul>
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Apagar</button>
          </li>
        </ul>
      ))}

      <hr />
    </div>
  );
};

export default HookUseReducer;
