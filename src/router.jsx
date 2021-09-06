import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Sobre} from './pages/Sobre'
import {Home} from './pages/Home'
import {Fotos} from './pages/Fotos'
import {Contatos} from './pages/Contatos'

import {Header, Footer} from './components/Main'

export const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path={['/','/home']} exact component={Home}></Route> 
                    <Route path='/sobre' component={Sobre}></Route>
                    <Route path='/fotos' component={Fotos}></Route>
                    <Route path='/contatos' component={Contatos}></Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}