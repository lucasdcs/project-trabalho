import {Foto} from '../../components/Main'

export const Fotos = () => {
    return (
        <>
            <h1 className="text-center">Minha Galeria:</h1>

        <div className="container">
            <div className="row">
                <Foto foto="img1.JPG"></Foto>
                <Foto foto="img2.JPG"></Foto>
                <Foto foto="img3.JPG"></Foto>
                <Foto foto="img4.JPG"></Foto>
                <Foto foto="img5.JPG"></Foto>
                <Foto foto="img6.JPG"></Foto>

            </div>
        </div>
        
        </>
    
    )
}