import { React, useEffect } from "react";

export function Entry(props) {
  const { entry, removeEntry } = props;
  useEffect(() => {
    const timeRemaining = entry.expiresAt - Date.now();
    // setTimeout?
  }, [entry.expiresAt]);

  const handleRemoveClick = () => {
    removeEntry(entry.id);
  };

  return (
    <li className="Entry">
      <button
        aria-label="Remove Entry"
        style={{ display: "inline" }}
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>{" "}
      <div style={{ display: "inline" }} className="text">{entry.text}</div>
    </li>
  );
}
