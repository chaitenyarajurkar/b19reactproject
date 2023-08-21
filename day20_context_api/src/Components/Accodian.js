import React, { useState } from 'react';

const Accodian = () => {
    const [flag,setFlag] = useState(false);
    const [accordiandata,setAccodirandat] = useState([{title:"Accodian 1",body:"fdfdfhdjhfjfhdj",flag:false},
    {title:"Accodian 2",body:"fdfdfhdjhfjfhdj",flag:false},{title:"Accodian 3",body:"fdfdfhdjhfjfhdj",flag:false}])
    return (
        <div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  onClick={()=>setFlag(!flag)}>
        Accordion Item #1
      </button>
    </h2>
    {flag && <div id="collapseOne" className={flag ?"accordion-collapse collapse show" :  "accordion-collapse collapse"} >
      <div className="accordion-body">
        
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>}
       <span>{flag ? ("+") : ("-")}</span>
  </div>
  
  
</div>
            
        </div>
    );
};

export default Accodian;