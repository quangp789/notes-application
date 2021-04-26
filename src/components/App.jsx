import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

    const [notes, setNotes] = useState([])

    //- Pass the new note back to the App.
    function addNote(newNote) {
      setNotes(prevNotes => {
          //- Add new note to an array.
         return [...prevNotes, newNote];
      })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
         return prevNotes.filter((noteItem, index) => {
            return index !== id;
          })  
        })
    }

    //- Take array and render seperate Note components for each item.
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note 
                    key= {index}
                    id= {index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer />
        </div>
        
    );
}

export default App;