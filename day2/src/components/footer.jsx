
// 2)conditional rendering
function Footer(){
    const show = false;
    const title = "React JS ";
    return (
        <>
        <p>
        Hello world 
      </p>
      {show && <h4>{title}</h4>}
      </>
    )
}

export default Footer;


// real Dom 

// virtual dom

//      &&

// true      false     false

// false     true      false

// false     false     false 

// true      true       true