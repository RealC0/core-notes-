import { createContext, useEffect, useState } from "react";
import { Notes as data } from "../Data/Notes";
import axios from "axios";

export const Context = createContext();

axios.get("core-notes-production.up.railway.app/notes")
    .then(function (response) { console.log("Response: " + response); })
    .catch(function (error) { console.log("Error: " + error); })
    .finally(function () { });

function contextProvider(props) {
    const [notes, setNotes] = useState([]);
    const [keyId, setKeyId] = useState(2);    

    function addNote(note) {
        setNotes([
            ...notes,
            {
                id: keyId,
                title: note.title,
                content: note.content,
                favorite: false,
                color: 'white',
            },
        ]);
    };

    useEffect(() => { setNotes(data) }, []);

    function deleteNote(noteId) {
        setNotes(notes.filter(note => note.id !== noteId));
    };

    return (
        <Context.Provider
            value=
            {{
                keyId,
                setKeyId,
                notes,
                addNote,
                deleteNote,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default contextProvider;