import { useState } from 'react';

function ProductCreate() {
  const [nome, setNome] = useState('');


    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Form mask</h4>
                    <p className="card-description">Gives a preview of input format</p>
                    <form className="forms-sample">
                      <div className="mb-3 row">
                        <div className="col">
                          <label>Date:</label>
                          <input className="form-control" data-inputmask="'alias': 'datetime'" data-inputmask-inputformat="dd/mm/yyyy" />
                        </div>
                        <div className="col">
                          <label>Date time:</label>
                          <input className="form-control" data-inputmask="'alias': 'datetime'" data-inputmask-inputformat="dd/mm/yyyy HH:MM:ss" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label>Date with custom placeholder:</label>
                        <input className="form-control" data-inputmask="'alias': 'datetime'" data-inputmask-placeholder="*" data-inputmask-inputformat="dd/mm/yyyy" />
                      </div>
                      <div className="mb-3">
                        <label>Phone:</label>
                        <input className="form-control" data-inputmask-alias="(+99) 9999-9999" />
                      </div>
                      <div className="mb-3">
                        <label>Currency:</label>
                        <input className="form-control" data-inputmask="'alias': 'currency'" />
                      </div>
                      <div className="mb-3 row">
                        <div className="col">
                          <label>Email:</label>
                          <input className="form-control" data-inputmask="'alias': 'email'" />
                        </div>
                        <div className="col">
                          <label>Ip:</label>
                          <input className="form-control" data-inputmask="'alias': 'ip'" />
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate