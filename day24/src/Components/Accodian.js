import React, { useState } from 'react';
import { useEffect } from 'react';

const Accodian = () => {
  const [accodianData, setAccordianData] = useState([{ title: " Accordion Item #1", body: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.", toggle: false },
  { title: " Accordion Item #2", body: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.", toggle: false },
  { title: " Accordion Item #3", body: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.", toggle: false },
  { title: " Accordion Item #4", body: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.", toggle: false }
  ])

  // const [formData,setFormData] = useState({
  //   name:"",
  //   age:"",
  //   address:{tempAddress:"",permanentAddress:"",oldAddres:""},
  //   pincode:"44232"
  // })

  // useEffect(()=>{
  //   //logic
  //   setFormData(prevState=>({
  //     ...prevState,address:{...prevState.address,oldAddres:"Pune"}
  //   }))

  // },[])

  const showHideAccordian = (position) => {
      console.log(position,accodianData);
     
      setAccordianData(prevState=>{

          const newData = prevState.map((item,index)=>{
            if(index === position){
              return {...item,toggle:!item.toggle}
            }else{
              return item;
            }
          })
          return newData;
      })

  }

  return (
    <div>


      {accodianData.map((item, index) => {
        return (
          <div className="accordion p-3" id="accordionExample" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className={item.toggle ? "accordion-button " : "accordion-button collapsed"} 
                          type="button" onClick={() => showHideAccordian(index)}>
                  {item.title}
                </button>
              </h2>
              <div id="collapseOne" className={item.toggle ? "accordion-collapse collapse show" : "accordion-collapse collapse"} >
                <div className="accordion-body">

                  <strong>This is the first item's accordion body.</strong>
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        )
      })}









    </div>
  );
};

export default Accodian;