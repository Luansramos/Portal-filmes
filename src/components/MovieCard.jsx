import { Link } from "react-router-dom";

export default function MovieCard({id,titulo,imagem_destaque}) {
    return(
        <div className="flex flex-col ">
            <h2>{titulo}</h2>
            <img src={imagem_destaque}/>
            <Link to = {`/filmes/${id}`} className="bg-pink-500 mt-8 border-r"> Saber Mais</Link>

        </div>
    )

}