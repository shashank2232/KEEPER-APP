import React, { useState } from "react";

function CreateArea(props) {
  // destructuring an ARRAY []
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // destructuring an OBJECT {}
    const { name, value } = event.target;

    // setNote will receive previous note & we'll use that to add to existing note
    // prev is compulsory,after it u can write anything
    // prev automatically defines previous value in REACT
    setNote((prevNote) => {
      return {
        ...prevNote, // this will b added to final object
        [name]: value
      };
    });
  }

  // when we call submitNote,note gets added & we set note state to empty
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    // to prevent RE-LOADING of page when user clicks on Add
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
