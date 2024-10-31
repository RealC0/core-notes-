import { useContext } from "react";
import Card from "../Card/Card";
import { Context } from "../../Context/Context";
import '../../index.css';

function List() {
    const { notes } = useContext(Context);
    if (notes.length === 0) {
        return <h2 className="notes_empty">Lista vazia</h2>
    }

    return (
        <section className="notes-container">
            {notes.map((note) => (
                <Card key={note.id} note={note} />
            ))}
        </section>
    );
};

export default List;