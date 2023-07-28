import React from 'react';
import {name,address,callingData} from '../../common';
import { FIRSTIMAGE } from '../../assets/images';

const Dashboard = () => {
  let funcoutput = callingData();
  console.log(funcoutput);
    return (
        <div>
            <h3>This is Dashborad {name}</h3>
            <h4>
                {address}
            </h4>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8UsfLKmOTyUs4cm2CEr0GEw_Idbx88ifCd7gJJAI&s'></img>

            <div>
                <img src={FIRSTIMAGE} alt='not avilbale'   ></img>
            </div>
        </div>
    );
};

export default Dashboard;