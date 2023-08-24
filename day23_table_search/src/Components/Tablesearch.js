import React, { useEffect, useState } from 'react';
import data from '../assets/other/data.json';
const Tablesearch = () => {
    console.log(data);
    const [jsonData, setJsonData] = useState([]);
    const [search,setSearch] = useState("");
    const [searchDataJson,setSearchDataJson] = useState([])

    useEffect(() => {
        setJsonData(data);
        setSearchDataJson(data);
    }, [])
   
    const onChangeHandler=(value)=>{
        setSearch(value);

        const result = jsonData.filter((item)=>{
                        //  if(item.name.toString().includes(value)){
                        //     return item;
                        //  }

                        return value ==="" ? item  : item.name.toString().includes(value); 
        })
       
        console.log(result);
        setSearchDataJson(result);



    }

    return (
        <div>
            <div className='p-3'>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                    </div>
                    <input type="text" value={search} onChange={(e)=>onChangeHandler(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </div>
            </div>
            <div className='p-3'>
                 <p>Total records : {searchDataJson.length}</p>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>

                    {searchDataJson.length > 0 && searchDataJson.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })}



                </tbody>
            </table>

        </div>
    );
};

export default Tablesearch;