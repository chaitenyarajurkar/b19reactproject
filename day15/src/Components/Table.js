import React from 'react';

const Table = (props) => {

    const editForm=(formObj,index)=>{
        props.editFormFromParent(formObj,index)
    }

    const deleteForm = (formObj,index)=>{
      props.getDeleteInfoFromTable(formObj,index);
    }
    return (
        <div>
             table data variable    ==formInfoArray
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">EDIT</th>
                                    <th scope="col">DELETE</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    props?.formInfoArray && props?.formInfoArray.map((formobj, index) => {
                                        return (
                                            <tr>
                                                <td>{formobj.name}</td>
                                                <td>{formobj.age}</td>
                                                <td>{formobj.mobile}</td>
                                                <td>{formobj.gender}</td>
                                                <td>{formobj.email}</td>
                                                <td>{formobj.pincode}</td>
                                                <td>{formobj.address}</td>
                                                <td><button type='button' className='btn btn-secondary' onClick={() => editForm(formobj, index)}> edit</button></td>
                                                <td><button type='button' className='btn btn-danger' onClick={() => deleteForm(formobj, index)}> delete</button></td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
        </div>
    );
};

export default Table;