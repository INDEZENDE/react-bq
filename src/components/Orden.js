import React, {Component} from 'react';
import uuid from 'uuid';
const stateInicial ={
  orden:{
    desayuno:false,
    almuerzo:false,
    "Cafe americano": false,
    "Cafe con leche": false,
    "Sandwich de jamon": false,
    "Jugo de naranja": false,
    "Hamburguesa": false,
    "Acompanamiento": false,
    "Bebida": false,

  }
}

class Orden  extends Component{
  state={ ...stateInicial}

  handleSubmit=e =>{
    e.preventDefault();
    const nuevaorden={...this.state.orden};
    nuevaorden.id=uuid();
    this.props.crearNuevaOrden(nuevaorden);
    this.setState({...stateInicial})
  };
  handleClick = e =>{
    e.preventDefault();
    this.setState({
      orden:{...this.state.orden,
        [e.target.name]: true,
        producto:e.target.name
      }
    });
    // if(this.state.orden.desayuno){ this.setState({
    //   orden:{almuerzo: false}})} ;


}
  render(){
    const {desayuno, almuerzo}=this.state.orden;
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row row-cols-2">

          <div className="form-group row">
            <div className="col-10 offset-2">
              <input  type="button" className="py-10 mt-2 btn btn-warning btn-block" name="desayuno"  onClick={this.handleClick} value="desayuno"></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-10 offset-2">
              <input  type="button" className="py-10 mt-2 btn btn-info btn-block" value="almuerzo" name="almuerzo"  onClick={this.handleClick}></input>
            </div>
          </div>
        </div>

        {desayuno ?
        <div className="row row-cols-4">
          <div className="form-group">
            <div className="col ">
              <p className="text-center">Cafe <br/> americano</p>
              <input type="button" className="py-3 mt-2 btn btn-warning btn-block" value="+" name="Cafe americano" onClick={this.handleClick}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <p className="text-center">Cafe <br/> con leche</p>
              <input type="button" className="py-3 mt-2 btn btn-warning btn-block" value="+" name="Cafe con leche" onClick={this.handleClick}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <p className="text-center">Sandwich <br/>con jamón</p>
              <input type="button" className="py-3 mt-2 btn btn-warning btn-block" value="+" name="Sandwich con jamon" onClick={this.handleClick}></input>
            </div>
          </div>
          <div className="form-group">
            <div className="col">
              <p className="text-center">Jugo <br/>natural</p>
              <input type="button" className="py-3 mt-2 btn btn-warning btn-block" value="+" name="Jugo natural" onClick={this.handleClick}></input>
            </div>
          </div>
        </div>:null}

        {almuerzo ?
          <div className="row row-cols-1">
            <div className="form-group">
              <div className="col ">
                <input type="button" className="py-12 mt-2 btn btn-info btn-block" name="Hamburguesa" value="Hamburguesa" onClick={this.handleClick}></input>
              </div>
            </div>
            <div className="form-group">
              <div className="col">
                <input type="button" className="py-12 mt-2 btn btn-info btn-block" name="Acompanamiento" value="Acompanamiento" onClick={this.handleClick}></input>
              </div>
            </div>
            <div className="form-group">
              <div className="col">
                <input type="button" className="py-12 mt-2 btn btn-info btn-block" name="Bebida" value="Bebida" onClick={this.handleClick}></input>
              </div>
            </div>
          </div>
          :null}

        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar a la orden"></input>
      </form>
    );
  }
}

export default Orden;
