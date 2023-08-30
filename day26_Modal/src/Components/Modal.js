import React, { useState } from 'react';

const Modal = (props) => {
   
    return (
        <div>
        
<div className={props.flag ? "modal fade show": "modal fade"} style={ props.flag ? {display:"block"}: {display:"none"} }  id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>props.settingFlag(props.flag)}>
          <span aria-hidden="true" >&times;</span>
        </button>
      </div>
      <div className="modal-body">
      {props.body}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>props.settingFlag(props.flag)}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;