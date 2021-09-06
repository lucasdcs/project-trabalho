import {Banner} from '../../components/Main'

export const Sobre = () => {
    return (
        <>
           
            <h1 className="text-center">Sobre Mim:</h1>
            
            <div className="container">
                <div className="card">
                    <Banner titulo="Sobre Mim" imagem="images/sobre.JPG"></Banner> 
                </div>
                <p className="text-center">Atualmente, eu trabalho de frentista na rede de postos Colonial, com um localizada na<br/>
                Av. Londrina 3464 - Zona II<br/>
                Profissão que no momento está servindo para custear meu curso, que em breve irei em atuar na área.
                Sou graduante na faculdade UniAlfa, do curso de Sistemas P/ Internet.
                Estou no 4° período do curso, tenho formação do ensino médio no colégio Monteiro Lobato, 
                tive a conclusão de um curso de Montagem de Computadores e Manutenção na instituição Cenaic(Centro Nacional Integrado de Cursos) em um
                período de um ano e dois mêses, em 2017. Onde então tive a certeza de engressar em algum curso superior que fosse na área
                de TI, e então acabei optando pela faculdade UniAlfa onde está me proporcionando uma constante aprendizagem para o mercado.

                </p>

            </div>
        </>
    )
}