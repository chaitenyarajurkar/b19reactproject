import React from 'react';
import Hoc from './Hoc';

const Normalcomponent = () => {
    return (
        <div>
            <h5>Heyy this is normal component</h5>
            
        </div>
    );
};

export default Hoc(Normalcomponent)