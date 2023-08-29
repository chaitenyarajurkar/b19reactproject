import React, { useEffect, useState } from 'react';
import data from '../assets/other/data.json';
const Tablesearch = () => {
    console.log(data);
    const [jsonData, setJsonData] = useState([]);
    const [search, setSearch] = useState("");
    const [searchDataJson, setSearchDataJson] = useState([]);
    const [columnName,setColumnName] = useState();
    const dropDown  = [{key:"Name",val:"name"},{key:"Email",val:"email"},{key:"Body",val:"body"}];
    const [orderby,setOrderby] = useState({name:"ASC",email:"ASC",body:"ASC"});
    useEffect(() => {
        setJsonData(data);
        setSearchDataJson(data);
    }, [])

    const onChangeHandler = (value) => {
        setSearch(value);
        const result = jsonData.filter((item) => {
            return value === "" ? item : item[columnName].toString().includes(value);
        })

        console.log(result);
        setSearchDataJson(result);



    }
     
 const   onColumnSelect = (event)=>{
    console.log(event.target.value);
    setColumnName(event.target.value);
    }
    // name
    // email
    // body

    const sortingFunction = (keyname) =>{
        console.log(orderby[keyname]);
        debugger;

        if(orderby[keyname] === "ASC"){
            const strAscending = [...searchDataJson].sort((a, b) =>
                a[keyname].toLowerCase() > b[keyname].toLowerCase() ? 1 : -1,
            );
            setSearchDataJson(strAscending);
            setOrderby(prevState=>({...prevState,[keyname]:"DESC"}));

        }

        if(orderby[keyname]  === "DESC"){
            const strDescending = [...searchDataJson].sort((a, b) =>
            a[keyname].toLowerCase() > b[keyname].toLowerCase() ? -1 : 1,
          );
            setSearchDataJson(strDescending);
            setOrderby(prevState=>({...prevState,[keyname]:"ASC"}));

        }

        

    }
    const capitalLeeter = "ABCD"
    console.log(capitalLeeter.toLowerCase())

    return (
        <div>
            <div className='p-3'>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                    </div>
                    <input type="text" value={search} onChange={(e) => onChangeHandler(e.target.value)} className="form-control"  />
                    <select class="form-select form-select-lg" aria-label=".form-select-lg example" value={columnName} onChange={(e)=>onColumnSelect(e)}>
                        {dropDown.map((item)=>{
                            return (
                              <option value={item.val}>{item.key}</option>
                            )
                        })}
                        
                       
                      
                    </select>
                </div>
            </div>
            <div className='p-3'>
                <p>Total records : {searchDataJson.length}</p>  
                <button className='btn btn-danger' onClick={()=>sortingFunction()} >sort by Email</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col" onClick={()=>sortingFunction("name")}>Name</th>
                        <th scope="col" onClick={()=>sortingFunction("email")} >Email</th>
                        <th scope="col" onClick={()=>sortingFunction("body")}>Body</th>
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