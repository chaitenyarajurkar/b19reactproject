import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const UserModule = () => {
    console.log("UserModule Parent is rendered");
    const [formInfoArray, setFormInfoArray] = useState([]);
    const [editData,setEditData] = useState({});
      const getDataFromForm =(formObj)=>{
        setFormInfoArray(prevState=>[...prevState,formObj]);
      }
    
      const getDeleteInfoFromTable=(formobj,index)=>{
            console.log(formobj,index);
            setFormInfoArray(prevState => {
                        let newArray = prevState.filter((val, ind) => {
                            if (ind !== index) {
                                return val;
                            }
                        })
                        return newArray;
                    })

      }

      const editFormFromParent = (formObj,index) =>{
            console.log(formObj,index);
            setEditData(prevState=>({
                ...prevState,formObj

            }));
      }

    return (
        <>
            <div className='container'>

                <div className='row '>
                    <div className='col-4 border border-primary p-3 shadow p-3 mb-5 bg-white  m-3 ' style={{ height: "500px", overflow: "auto" }}>
                        <Form  getDataFromForm={getDataFromForm} editData={editData}></Form>
                    </div>


                    <div className='col-7  border border-primary p-3 shadow p-3 mb-5 bg-white rounded m-3' style={{ height: "500px", overflow: "auto" }}>
                       <Table formInfoArray={formInfoArray} getDeleteInfoFromTable={getDeleteInfoFromTable} 
                       editFormFromParent={editFormFromParent}
                       ></Table>

                    </div>
                </div>
            </div>

        </>

    );
}

export default UserModule;