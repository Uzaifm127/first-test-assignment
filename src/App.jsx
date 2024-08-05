import { useState } from "react";
import { checkboxes } from "./variables";
import Checkbox from "./components/icons/Checkbox";
import Tick from "./components/icons/Tick";
import "./styles/App.css";

const App = () => {
  const [checked, setChecked] = useState(checkboxes);

  const onCheckChange = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div id="container">
      <div className="checkbox-item" onClick={() => onCheckChange(`allItems`)}>
        <div>All pages</div>{" "}
        <div
          className="checkbox-container"
          onClick={(e) => {
            e.stopPropagation();
            onCheckChange(`allItems`);
          }}
        >
          <Tick
            className={checked.allItems ? "tick-check" : "tick-unchecked"}
          />
          <Checkbox
            className={
              checked.allItems ? "checkbox-checked" : "checkbox-unchecked"
            }
          />
        </div>
      </div>
      <hr />
      <div id="checkboxes-list">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="checkbox-item"
            onClick={() => onCheckChange(`page${index + 1}`)}
          >
            <div>Page {index + 1}</div>{" "}
            <div
              className="checkbox-container"
              onClick={(e) => {
                e.stopPropagation();
                onCheckChange(`page${index + 1}`);
              }}
            >
              <Tick
                className={
                  checked[`page${index + 1}`] ? "tick-check" : "tick-unchecked"
                }
              />
              <Checkbox
                className={
                  checked[`page${index + 1}`]
                    ? "checkbox-checked"
                    : "checkbox-unchecked"
                }
              />
            </div>
          </div>
        ))}
      </div>
      <hr />
      <button id="id-btn">Done</button>
    </div>
  );
};

export default App;
