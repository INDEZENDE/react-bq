import React from 'react';
import Ordensingular from './Ordensingular';

const Ordencompletada = ({orden, eliminarOrden}) => (
  <div>
    <div className="lista-citas">
    {orden.map (orden => (<Ordensingular
                              key={orden.id}
                              orden={orden}
                              eliminarOrden={eliminarOrden}/>))}</div>

    <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Pedir"></input>
  </div>

);

export default Ordencompletada;
