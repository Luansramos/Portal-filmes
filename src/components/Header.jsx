import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header className="
            bg-pink-500 
            flex
            text-white 
            justify-around 
            h-20 
            items-center">
                <div>
                    <h1 className="font-bold">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/filmes">Filmes</NavLink></li>
                        <li><NavLink to="/generos">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}