import { React, useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddEntryForm({ addEntry }) {
  const defaultEntry = {
    text: "",
    timeToLive: 3,
  };
  let [entry, setEntry] = useState(defaultEntry);

  function handleTextChange(e) {
    setEntry({ ...entry, text: e.target.value });
  }

  function handleTimeToLiveChange(e) {
    setEntry({ ...entry, timeToLive: e.target.value });
  }

  function handleSubmit() {
    // chamar addEntry()
  }

  return (
    <form className="AddEntryForm" onSubmit={handleSubmit}>
      <label htmlFor="text">No que você está pensando?</label>
      <input
        className="text"
        onChange={handleTextChange}
        type="text"
        value={entry.text}
        aria-label="No que você está pensando?"
        placeholder=""
      />{" "}
      <label htmlFor="timeToLive">Duração (s):</label>
      <input
        className="timeToLive"
        onChange={handleTimeToLiveChange}
        type="number"
        style={{ width: "40px" }}
        value={entry.timeToLive}
        aria-label="Duração em segundos"
        placeholder="Duração (s)"
      />
      <button aria-label="Add Entry" type="submit">Add Entry</button>
    </form>
  );
}
