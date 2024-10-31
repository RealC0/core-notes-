import axios from "axios";
import { useEffect, useState } from "react";

// export interface NotesData {
//     id: int,
//     title: string,
//     content: string,
//     favorite: boolean,
//     color: string
// }

export const Notes = [
    {
        id: 0,
        title: 'Esse é o titulo',
        content: 'Conteudo para testes',
        favorite: false,
        color: 'white'
    },

    {
        id: 1,
        title: 'Esse é o titulo',
        content: 'Conteudo para testes',
        favorite: false,
        color: 'white'
    },
];