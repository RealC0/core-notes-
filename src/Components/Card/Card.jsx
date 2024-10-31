import { useContext } from 'react';
import { Context } from "../../Context/Context";
import '../../index.css';

function Card({ note }) {
    const { deleteNote } = useContext(Context);

    return (
        <div class="note new-note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button class="favorite-btn">⭐</button>
        </div>
    );
};

export default Card;




// interface CardProps {
//     id: number,
//     title: string,
//     content: string,
//     favorite: boolean,
//     color: string

// }