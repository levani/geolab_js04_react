import { useContext } from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";

export default function Task(props) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className={`task-${currentTheme}`}>
      <input type="checkbox" />
      <span>{props.text}</span>
      <button
        onClick={() => {
          if (typeof props.onDelete === 'function') {
            props.onDelete(props.id);
          }

          // props.onDelete?.(props.id);
        }}>
          Delete
        </button>
    </div>
  )
}