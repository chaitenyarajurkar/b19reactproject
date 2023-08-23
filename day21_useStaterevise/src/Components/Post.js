import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AppContext } from '../App';
// get
// post 
// put
// patch 
// delete

// baseurl ="http://jsonplaceholder.typicode.com"
//endpoint = "/posts"
//query parameters = "?postId=1"
const Post = () => {
    const [postData,setPostData] = useState([]);
    const contextinfo = useContext(AppContext);
    console.log("Post.js");
    
    useEffect(()=>{
      getDataFromServer();
    },[])
    const getDataFromServer =async()=>{
         try {
            //  request api via query parameter
           const response = await axios.get("http://jsonplaceholder.typicode.com/comments",{params:{postId:6}});
           console.log(response.data);
           setPostData(response.data);

         } catch (error) {
            console.log(error)
            alert("there is some");
         }
        
        
         
    }

    return (
        <div>
            <button onClick={()=>getDataFromServer()}>Get Articles</button>
            <button onClick={()=>contextinfo.upDateName()}>Change Name</button>

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>

    {postData.map((val,index)=>{
        return (

    <tr key={index}>
      <th scope="row">{val.id}</th>
      <td>{val.name}</td>
      <td>{val.email}</td>
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