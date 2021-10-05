import './App.css';
import history from './history';
import { Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Home } from './components/pages/Home/Home';
import { Avaliacoes } from './components/pages/Avaliacoes/Avaliacoes';
import { Enviar } from './components/pages/Enviaravaliacao/Enviar';
import { AvaliacaoEnviada } from './components/pages/Enviaravaliacao/AvaliacaoEnviada';
import { PaginaPedidos } from './components/pages/PaginaPedidos/PaginaPedidos';
import { PaginaConsulta } from './components/pages/PaginaConsulta/PaginaConsulta';
import { PaginaConsultaValida } from './components/pages/PaginaConsulta/PaginaConsultaValida';
import { PaginaConfirmacao } from './components/pages/PaginaConfirmacao/PaginaConfirmacao';
import { PaginaPedidoConfirmado } from './components/pages/PaginaConfirmacao/PaginaPedidoConfirmado';
import { PaginaDataIndisponivel } from './components/pages/PaginaConfirmacao/PaginaDataIndisponivel';
import { PaginaCancelamento } from './components/pages/PaginaConfirmacao/PaginaCancelamento';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { DeuCerto } from './components/pages/PaginaCadastro/DeuCerto';
import { PaginaOrcamento } from './components/pages/PaginaOrcamento/PaginaOrcamento';
import { FAQ } from './components/pages/FAQ/FAQ';
import { PaginaConfirmacaoOrcamento } from './components/pages/PaginaOrcamento/PaginaConfirmacaoOrcamento';
import { PaginaPedidoRealizado } from './components/pages/PaginaOrcamento/PaginaPedidoRealizado';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token: null, nome:null });
  
  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth}}>
      <Router history={history}>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/pedido">
          <PaginaPedidos></PaginaPedidos>
        </Route>
        <Route exact path="/consulta">
          {auth.token ==null? <Redirect to="/login"></Redirect> : <PaginaConsulta></PaginaConsulta>}
        </Route>
        <Route exact path="/consultavalida">
          {auth.token ==null? <Redirect to="/login"></Redirect> : <PaginaConsultaValida></PaginaConsultaValida>}
        </Route>
        <Route exact path="/confirmacao">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<PaginaConfirmacao></PaginaConfirmacao>}
        </Route>
        <Route exact path="/confirmado">
          {auth.token ==null? <Redirect to="/login"></Redirect> : <PaginaPedidoConfirmado></PaginaPedidoConfirmado>}
        </Route>
        <Route exact path="/dataindisponivel">
          {auth.token ==null? <Redirect to="/login"></Redirect> : <PaginaDataIndisponivel></PaginaDataIndisponivel>}
        </Route>
        <Route exact path="/cancelamento">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<PaginaCancelamento></PaginaCancelamento>}
        </Route>
        <Route exact path="/login">
          <PaginaLogin></PaginaLogin>
        </Route>
        <Route exact path="/cadastro">
          <PaginaCadastro></PaginaCadastro>
        </Route>
        <Route exact path="/sucesso">
          <DeuCerto></DeuCerto>
        </Route>
        <Route exact path="/orcamento">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<PaginaOrcamento></PaginaOrcamento>}
        </Route>
        <Route exact path="/confirmacaoorcamento">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<PaginaConfirmacaoOrcamento></PaginaConfirmacaoOrcamento>}
        </Route>
        <Route exact path="/pedidorealizado">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<PaginaPedidoRealizado></PaginaPedidoRealizado>}
        </Route>
        <Route exact path="/faq">
          <FAQ></FAQ>
        </Route>
        <Route exact path="/avaliacoes">
          <Avaliacoes></Avaliacoes>
        </Route>
        <Route exact path="/avaliacaoenviada">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<AvaliacaoEnviada></AvaliacaoEnviada>}
        </Route>
        <Route exact path="/enviarfeedback">
          {auth.token ==null? <Redirect to="/login"></Redirect> :<Enviar></Enviar>}
        </Route>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
