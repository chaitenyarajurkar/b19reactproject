import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const UserModule = () => {
    

    return (
        <>
            <div className='container'>

                <div className='row '>
                    <div className='col-4 border border-primary p-3 shadow p-3 mb-5 bg-white  m-3 ' style={{ height: "500px", overflow: "auto" }}>
                        <Form ></Form>
                    </div>


                    <div className='col-7  border border-primary p-3 shadow p-3 mb-5 bg-white rounded m-3' style={{ height: "500px", overflow: "auto" }}>
                       <Table></Table>

                    </div>
                </div>
            </div>

        </>

    );
}

export default UserModule;