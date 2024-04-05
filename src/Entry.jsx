import { React, useEffect, useState } from "react";

export function Entry(props) {
  const { entry, removeEntry, } = props;
  const [timeRemaining, setTimeRemaining] = useState(entry.expiresAt - Date.now());
  
  useEffect(() => {
    const timer = setTimeout(() => {removeEntry(entry.id);
    }, timeRemaining);
    return () => clearTimeout(timer); // setTimeout?
  }, [entry.expiresAt, entry.id, removeEntry, timeRemaining]);

  useEffect(() => {
    const getNewExpirationTime = entry.expiresAt - Date.now();
    if (getNewExpirationTime > 0) {
      setTimeRemaining(getNewExpirationTime);
    } else {
      removeEntry(entry.id);
    }
  }, [entry.expiresAt, removeEntry]);

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
