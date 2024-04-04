import React, { useState } from "react";
import { AddEntryForm } from "./AddEntryForm";
import { Entry } from "./Entry";
import { generateId, getNewExpirationTime } from "./utilities";

export default function App() {
  const [entries, setEntries] = useState([
    {
      id: generateId(),
      text: "Esse pensamento vai desaparecer em 5 segundos.",
      expiresAt: getNewExpirationTime(5),
    },
    {
      id: generateId(),
      text: "Um pouco mais duradouro, esse vai desaparecer em 8 segundos.",
      expiresAt: getNewExpirationTime(8),
    },
  ]);

  function addEntry(entry) {
    setEntries([...entries, entry]);
  }

  function removeEntry(id) {
    console.log(id);
    setEntries(entries.filter(entry => entry.id !== id));
  }


  return (
    <div className="App">
      <header>
        <h1>Anotando Pensamentos</h1>
      </header>
      <main>
        <AddEntryForm addEntry={addEntry} />
        <ul className="entries">
          {entries.map((entry) => (
            <Entry
              key={entry.id}
              entry={entry}
              removeEntry={removeEntry}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
