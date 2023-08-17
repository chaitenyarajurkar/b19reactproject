import React, { useEffect, useState } from 'react';
import axios from "axios";
// get
// post 
// put
// patch 
// delete


const Post = () => {
    const [postData,setPostData] = useState([]);
    
    const getDataFromServer =async()=>{
        
        const response  = await axios.get("http://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
        setPostData(response.data);


         
    }

    return (
        <div>
            <button onClick={()=>getDataFromServer()}>Get Articles</button>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">userID</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>

    {postData.map((val,index)=>{
        return (

    <tr key={index}>
      <th scope="row">{val.userId}</th>
      <td>{val.id}</td>
      <td>{val.title}</td>
      <td>@{val.body}</td>
    </tr>
        )
    })}
   
  </tbody>
</table>
               
        </div>
    );
};

export default Post;