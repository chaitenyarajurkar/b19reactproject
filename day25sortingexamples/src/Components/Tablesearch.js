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
        let d = [{
            "postId": 1,
            "id": 1,
            "name": "apples",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            "postId": 1,
            "id": 2,
            "name": "Apples",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          },
          {
            "postId": 1,
            "id": 3,
            "name": "ap",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
          },
          {
            "postId": 1,
            "id": 4,
            "name": "Ap",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
          },
          {
            "postId": 1,
            "id": 5,
            "name": "Watermelon",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
          },
          {
            "postId": 1,
            "id": 5,
            "name": "Bananas",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
          },{
            "postId": 1,
            "id": 5,
            "name": "cherries",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
          }]
        setJsonData(d);
        setSearchDataJson(d);
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
            // const strAscending = [...jsonData].sort((a, b) =>
            //     a[keyname].toString() > b[keyname].toString() ? 1 : -1,
            // );
            let strAscending = jsonData;
            strAscending.sort((a, b) => a[keyname].toString().localeCompare(b[keyname].toString(),'en', { caseFirst: 'upper' })); 
            // strAscending.sort((a, b) => a[keyname].toString().localeCompare(b[keyname].toString())); 
            setSearchDataJson(strAscending);
            setOrderby(prevState=>({...prevState,[keyname]:"DESC"}));

        }

        if(orderby[keyname]  === "DESC"){
        //     const strDescending = [...jsonData].sort((a, b) =>
        //     a[keyname].toString() > b[keyname].toString()? -1 : 1,
        //   );
        let strDescending = jsonData;
        // strDescending.sort((a, b) => b[keyname].toString().localeCompare(a[keyname].toString())); 
        strDescending.sort((a, b) => b[keyname].toString().localeCompare(a[keyname].toString(), 'en', { caseFirst: 'upper' })); 
            setSearchDataJson(strDescending);
            setOrderby(prevState=>({...prevState,[keyname]:"ASC"}));

        }

        

    }
    const capitalLeeter = "ABCD"
    console.log(capitalLeeter.toLowerCase())

    //another sorting example
    let fruits = ['apples','Apples','ap','Ap', 'Watermelon', 'Bananas', 'cherries'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);
fruits.sort((a, b) => a.localeCompare(b, undefined, { caseFirst: 'upper' }));
console.log(fruits);
fruits.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'case', caseFirst: 'upper' }));
console.log(fruits);
fruits.sort((a, b) => a.localeCompare(b, 'en', { caseFirst: 'upper' }));
console.log(fruits);
fruits.sort((a, b) => a.localeCompare(b, 'kf', { caseFirst: 'upper' }));
console.log(fruits);

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