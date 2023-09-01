import React, { useEffect, useState } from 'react';
import data from '../assets/other/data.json';
import Modal from './Modal';
const Tablesearch = () => {
    console.log(data);
    const [jsonData, setJsonData] = useState([]);
    const [search, setSearch] = useState("");
    const [searchDataJson, setSearchDataJson] = useState([]);
    const [columnName, setColumnName] = useState("email");
    const dropDown = [{ key: "Name", val: "name" }, { key: "Email", val: "email" }, { key: "Body", val: "body" }];
    const [orderby, setOrderby] = useState({ name: "ASC", email: "ASC", body: "ASC" });
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        setJsonData(data);
        setSearchDataJson(data);
    }, [])

    const onChangeHandler = (value) => {
        setSearch(value, columnName);
        const result = jsonData.filter((item) => {
            return value === "" ? item : item[columnName].toString().includes(value);
        })

        console.log(result);
        setSearchDataJson(result);



    }

    const onColumnSelect = (event) => {
        console.log(event.target.value);
        setColumnName(event.target.value);
    }
    // name
    // email
    // body

    const sortingFunction = (keyname) => {
        console.log(orderby[keyname]);

        if (orderby[keyname] === "ASC") {
            functionForAsc(keyname);
            debugger
            const strAscending = [...searchDataJson].sort((a, b) =>
                a[keyname].toLowerCase() > b[keyname].toLowerCase() ? 1 : -1,
            );
            setSearchDataJson(strAscending);
            setOrderby(prevState => ({ ...prevState, [keyname]: "DESC" }));

        }

        if (orderby[keyname] === "DESC") {
            const strDescending = [...searchDataJson].sort((a, b) =>
                a[keyname].toLowerCase() > b[keyname].toLowerCase() ? -1 : 1,
            );
            setSearchDataJson(strDescending);
            setOrderby(prevState => ({ ...prevState, [keyname]: "ASC" }));

        }



    }
 
    const settingFlag = (flag) => {
        setFlag(!flag);
    }

    const functionForAsc = (keyname) => {

        //Ascending
        // let originalArrays = ["Apple", "apple", "Acrobat", "Account", "account", "Banana", "banana", "carrot", "Carrot", 1, 2];
        let originalArrays = searchDataJson;
        function lexCompare(a, b) {
            if (a[0].toUpperCase() !== b[0].toUpperCase() || a[0] === b[0])
                return a.localeCompare(b);
            return a[0] === a[0].toUpperCase()
                ? -1
                : 1
        }
        let sortedArrays = originalArrays.slice().sort((a, b) => {
            if (typeof a[keyname] === typeof b[keyname]) {
                return typeof a[keyname] === "number"
                    ? a[keyname] - b[keyname]
                    : lexCompare(a[keyname], b[keyname])
            } else {
                return typeof a[keyname] === "number"
                    ? 1
                    : -1
            }
        })

        console.log(sortedArrays);
    }
  

//Descending

let originalArray = ["Apple","apple","Acrobat","Account","account","Banana","banana","carrot","Carrot",1,2];

function lexCompare(a,b) {
  if (b[0].toUpperCase() !== a[0].toUpperCase() || b[0] === a[0])
    return b.localeCompare(a);
  return a[0] === a[0].toUpperCase() 
    ? -1
    : 1
}

let sortedArray = originalArray.slice().sort((a,b) => {
  if (typeof a === typeof b) {
    //if a and b have the same type (ie both are number or string)
    return typeof a === "number"
      ? b - a  //both are numbers, sort them ascending
      : lexCompare(a,b)  //use the sorting function for strings defined above
  } else {
    return typeof a === "number"
      ? 1 // a is a number, b is a string so b has to be sorted before a
      : -1 // b is a number, a is a string so a has to be sorted before b
  }
})

console.log(sortedArray);



    return (
        <div>
            <Modal title="This is props title" body="This is props body" flag={flag} settingFlag={settingFlag} ></Modal>
            <div className='p-3'>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                    </div>
                    <input type="text" value={search} onChange={(e) => onChangeHandler(e.target.value)} className="form-control" />
                    <select class="form-select form-select-lg" aria-label=".form-select-lg example" value={columnName} onChange={(e) => onColumnSelect(e)}>
                        {dropDown.map((item) => {
                            return (
                                <option value={item.val}>{item.key}</option>
                            )
                        })}



                    </select>
                </div>
            </div>
            <div className='p-3'>
                <p>Total records : {searchDataJson.length}</p>
                <button className='btn btn-danger' onClick={() => setFlag(true)} >Open Modal</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col" onClick={() => sortingFunction("name")}>Name</th>
                        <th scope="col" onClick={() => sortingFunction("email")} >Email</th>
                        <th scope="col" onClick={() => sortingFunction("body")}>Body</th>
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