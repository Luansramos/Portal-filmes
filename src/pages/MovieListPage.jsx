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

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function MovieListPage() {

    const [search, setSearch] = useState('')
    const [filmes, setFilmes] = useState([])


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')

        .then(data => data.json())
        .then( res =>  setFilmes(res.results))
        .catch(  erro => console.log(erro))
        .finally( () => console.log ("fim"))
    },[])


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
            <section className=" gap-5 ">


                {
                    filmes.map(filme => (
                        <>
                        <h1>{filme.title}</h1>
                        <p>{filme.vote_average}</p>

                        <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}/>
                        <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}/>
                        </>
                    ))
                }
            </section>

        </>
    )
}