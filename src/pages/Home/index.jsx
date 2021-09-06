import {Banner} from '../../components/Main'

export const Home = () => {
    return(
        <>
            <Banner titulo="Página Principal - Lucas" imagem="images/banner.JPG"></Banner>
            
            <div className="container">
            <h1 className="text-center">Primeira Página</h1>
            <p>Está é minha página pessoal, cuja a qual está sendo criada pela finalidade de um trabalho
            estudantil, utilizando os esquemas de template ensinado na sala de aula para a criação do mesmo.
            Onde irei mostrar meus Contatos, Fotos e contarei um pouco sobre mim.
            </p>
            </div>
        </>
    )
}