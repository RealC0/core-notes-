import { useContext, useState } from 'react';
import { Context } from '../../Context/Context';
import '../../index.css';

function Form() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [color, setColor] = useState("white");
    const { keyId, setKeyId, addNote } = useContext(Context);

    const HandleSubmit = (e) => {
        e.preventDefault();
        addNote({
            id: setKeyId(keyId + 1),
            title,
            content,
            favorite,
            color
        });
        setTitle("");
        setContent("");
        setFavorite(false);
        setColor("white");
    };

    return (
        <section className="form_section">
            <div class="note new-note">
                <h3>Título</h3>
                <p>Criar nota...</p>
                <button class="favorite-btn">⭐</button>
            </div>
        </section>
    );
};

export default Form;