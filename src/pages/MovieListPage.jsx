//---------------->>>EXEMPLOS:<<<----------------
// import { useState } from "react"

// export default function MovieListPage(){

//     const [contador, setContador ] =  useState(0)

//     const handleaumentar = () => {
//         setContador((prev) => prev+1)
//         console.log(contador)
//     }
//     const handlediminuir = () =>{

//         setContador((prev)=>prev-1)

//     }
//     const handlezerar = () =>{

//         setContador(0)
//     }

//     const [texto, setexto]= useState('eu te odeio')

//     const handlemudar = () => {
//         setexto(prev => prev == 'eu te odeio'? "eu te amo": "eu te odeio")

//     }

//     return(
//         <>
//         <p>{Math.random()}</p>
//         <p>{contador}</p>
//         <button onClick={handleaumentar }>aumentar</button>
//         <br />
//         <button onClick={handlediminuir }>diminuir  </button>
//         <br />
//         <button onClick={handlezerar }>zerar  </button>
//         <br />
//         <button onClick={handlemudar }>{texto}</button>

//    </>
//     )
// -------------->>> PAGINA DE FATO:  <<<----------------

import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";

export default function MovieListPage() {

    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filemsfiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <h2>veja o catlogo do filmes completos</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="flex gap-5 ">


                {
                    filemsfiltrados.length > 0 ? 
                    filemsfiltrados 
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                        :
                        <p>filem nao encontrado</p>
                }
            </section>

        </>
    )
}