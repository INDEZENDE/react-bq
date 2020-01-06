import React from 'react';

const Ordensingular= ({orden, eliminarOrden}) => (
  <div className="media mt-3">
    <div className="media-body">

      <p className="card-text">
        <span>Pedido:</span>{orden.producto}
      </p>
      <button className="btn btn-danger"
              onClick={() => eliminarOrden(orden.id)
              }>Borrar</button>

    </div>
  </div>

);

export default Ordensingular;
