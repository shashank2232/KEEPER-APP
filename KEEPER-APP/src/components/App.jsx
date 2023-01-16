import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); // initially its empty array

  // here note in () is an OBJECT
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; // here we 1st got hold of all previous notes and then add new note at end (SPREAD OPERATOR)
    });
  }

  // we'll need the id of node to b deleted,then this fn() will b passed over to each of notes as a property
  function deleteNote(id) {
    setNotes((prevNotes) => {
      // filter fn() accepts upto 3 arguments
      // noteitem & index of that item(to check which one we wanna delete)
      return prevNotes.filter((noteItem, index) => {
        // index not equals id of the note that needs to b deleted
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
