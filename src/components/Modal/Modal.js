import React from 'react';

import './Modal.css';

const modal = (props) => {
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h3>Nashville FreeCodeCamp 2020</h3>
        </div>
        <div className="modal-body">
            <p>
            <img src="" />
              {props.children}
            </p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>Stink</button>
          <button className="btn-continue">Face</button>
        </div>
      </div>
    </div>
  )
}

export default modal;

