import React, { useCallback, useState } from 'react';
import CardList from './cardList';

// useCallback 
//memo
const CardParent = () => {
    const [formData, setfromData] = useState({
        title: "",
        description: ""
    });

    const [cardData,setCardData] = useState([]);
    const commmonHandler = (fieldName, event) => {
        // console.log(fieldName, event.target.value);
        setfromData(prevState => ({
            ...prevState, [fieldName]: event.target.value
        }))

    }

    const submitHandler = (e) => {
        e.preventDefault();
        setCardData(prevState=>[...prevState,formData]);
        setfromData(
            {
                title: "",
                description: ""
            }
        )
    }
   
    // console.log("independent");
    

     const rwaFunction = useCallback(()=>{
        console.log("heelo world");
     },[])

    return (
        <div>
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div className="mb-3">
                        <label className="form-label">Title:</label>
                        <input type="text" value={formData.title} className="form-control" onChange={(e) => commmonHandler("title", e)} id="exampleFormControlInput1" placeholder="Enter title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" value={formData.description} className="form-control" onChange={(e) => commmonHandler("description", e)} id="exampleFormControlInput1" placeholder="Enter description" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Submit Form</button>

                    </div>
                </form>
            </div>
            <CardList cardData={cardData} rwaFunction={rwaFunction}></CardList>
        </div>
    );
};

export default CardParent;