import {Link} from 'react-router-dom'

export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <Link to={'/home'} className="navbar-brand">
                    <img src="images/logo.png" alt="Lucas"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to={'/sobre'} className="nav-link">Sobre</Link>
                        </li>
                        <li>
                            <Link to={'/fotos'} className="nav-link">Fotos</Link>
                        </li>
                        <li>
                            <Link to={'/contatos'} className="nav-link">Contato</Link>
                        </li>

                    </ul>
                </div>   
            </nav>
        </>
    )
}

export const Footer = () => {
    return(
        <>
            <footer className="text-center bg-black">
                <img src="images/logo.png" alt="Lucas" />
                <p>Desenvolvido por Lucas Del Corsi Silva</p>
            </footer>

        </>
    )
}

export const Banner = props => {
    return (
        <>
            <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100"/>
        </>

    )
}

export const Foto = props => {
    return(
        <>
            <div className="col-12 col-md-4">
                <div className="card">
                    <img width="100%" height="320" src={`images/${props.foto}`}/>
                </div>
            </div>
        </>
    )
}