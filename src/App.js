import React, {Component} from 'react';
import './bootstrap.min.css';
import Cliente from './components/Cliente';
import Header from './components/Header';
import Orden from './components/Orden';
import Ordencompletada from './components/Ordencompletada';

class App extends Component {
    state ={
      orden:[]
    }
    crearNuevaOrden = datos => {
      const orden =[...this.state.orden, datos];
      this.setState({
        orden
      })
    }
    eliminarOrden = id => {

      const ordenesActuales =[...this.state.orden];
      const orden= ordenesActuales.filter(orden =>orden.id !== id);
      this.setState({orden})
    }
    render(){
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 mx-auto">
              <Header titulo="Burger Queen"/>
              <Cliente />
            </div>
            <div className="col-12 mx-auto">
              <div className="row row-cols-4">
                <div className=" mt-5 py-5 col-5 ">
                  <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                    Selecciona tu pedido</h2>
                    <Orden crearNuevaOrden={this.crearNuevaOrden}/>
                  </div>
                </div>
                <div className="card mt-5 py-5 col-4 ">
                  <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                    Tu orden es:</h2>
                    <Ordencompletada orden={this.state.orden}
                    eliminarOrden={this.eliminarOrden}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
