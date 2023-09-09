import React from 'react';

const Label = (props) => {
    return (
        <div>
            <label  className='form-label mb-2'>{props.label}</label>
            
        </div>
    );
};

export default Label;