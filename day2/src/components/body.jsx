//conditional rendering 
// if/esle inline with condtional rendering
function Body(){
    const showBody = false;
    const textShow = "It is shwoing";

    
    return (
    <>
        <ul>
        <li> Component </li>
        <li>Routing</li>
        <li>Html</li>
        <li>Rendering</li>

      </ul>
      <div>
          <h1>{showBody ?  textShow : "shwo bdy s false"}</h1>
      </div>



      </>

    )
}

export default Body;