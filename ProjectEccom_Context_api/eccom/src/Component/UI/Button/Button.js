import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button type='submit' className='btn btn-primary'>{props.label}</button>
        </div>
    );
};

export default Button;