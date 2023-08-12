import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const UserModule = () => {
    console.log("UserModule Parent is rendered");
    const [formInfoArray, setFormInfoArray] = useState([]);
    const [editData,setEditData] = useState({});
    const [indexforedit, setIndexForEdit] = useState("");
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
            setIndexForEdit(index);
            setEditData(prevState=>({
                ...prevState,formObj

            }));
      }

    const  saveFromParent=(formObj)=>{
         setFormInfoArray(prevState => {
            let d = prevState.map((objs, index) => {
                if (indexforedit === index) {
                    return formObj;
                } else {
                    return objs;
                }
            });
            return d;
        })
      }

    return (
        <>
            <div className='container'>

                <div className='row '>
                    <div className='col-4 border border-primary p-3 shadow p-3 mb-5 bg-white  m-3 ' style={{ height: "500px", overflow: "auto" }}>
                        <Form  getDataFromForm={getDataFromForm} editData={editData} saveFromParent={saveFromParent}></Form>
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