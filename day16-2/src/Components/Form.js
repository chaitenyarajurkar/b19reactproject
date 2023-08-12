import React, { useEffect, useState } from 'react';

const Form = (props) => {
      console.log("form is rendered")
    const [formData, setfromData] = useState({
        name: "",
        age: 0,
        mobile: "",
        email: "",
        pincode: "",
        address: "",
        gender: "",
        permananentAddress: ""
    });

    useEffect(()=>{
       console.log("useEffect call",props.editData);
       if(props.editData?.formObj){
           setfromData(props.editData?.formObj);
           setHideSubmit(true);
       }

    },[props.editData])

    const [hideSubmit, setHideSubmit] = useState(false);
    const [errorName, setErrorName] = useState(true);
  
    console.log(props.editData);

    const commmonHandler = (fieldName, event) => {
        // console.log(fieldName, event.target.value);
        setfromData(prevState => ({
            ...prevState, [fieldName]: event.target.value
        }))

    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.name !== "") {


            console.log(formData);
          props.getDataFromForm(formData);   //method call to send data to parent 

            setfromData({
                name: "",
                age: 0,
                mobile: "",
                email: "",
                pincode: "",
                address: "",
                gender: "",
                permananentAddress: ""
            });
        } else {
            alert("please check fields");
            setErrorName(false);
        }
    }

 

    const saveForm = () => {
        props.saveFromParent(formData);
        setfromData({
            name: "",
            age: 0,
            mobile: "",
            email: "",
            pincode: "",
            address: "",
            gender: "",
            permananentAddress: ""
        });

        setHideSubmit(false);
    }
console.log(formData);
   
    return (
        <div>
            <div className="alert alert-primary text-center" role="alert">
                            Person Detail Form   //varname formData
                        </div>
                        <form onSubmit={(e) => submitHandler(e)}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" value={formData.name} className={!errorName ? "form-control is-invalid" : "form-control"} onChange={(e) => commmonHandler("name", e)} id="exampleFormControlInput1" placeholder="Enter name" />
                                {!errorName && <div className="invalid-feedback">
                                    Please choose a username.
                                </div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age:</label>
                                <input type="number" value={formData.age} className="form-control" onChange={(e) => commmonHandler("age", e)} id="exampleFormControlInput1" placeholder="Enter age" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input type="text" value={formData.mobile} className="form-control" onChange={(e) => commmonHandler("mobile", e)} id="exampleFormControlInput1" placeholder="Enter Mobile No." />
                            </div>

                            {/* static values */}
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select" aria-label="Default select example" value={formData.gender} onChange={(e) => commmonHandler("gender", e)}>
                                    <option defaultValue={formData.gender}>select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" value={formData.email} className="form-control" onChange={(e) => commmonHandler("email", e)} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Pincode</label>
                                <input type="text" value={formData.pincode} className="form-control" onChange={(e) => commmonHandler("pincode", e)} id="exampleFormControlInput1" placeholder="Enter Pincode" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Example textarea</label>
                                <textarea className="form-control" value={formData.address} onChange={(e) => commmonHandler("address", e)} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Permanat Address </label>
                                <textarea className="form-control" value={formData.permananentAddress} onChange={(e) => commmonHandler("permananentAddress", e)} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="col-auto">
                                {!hideSubmit && <button type="submit" className="btn btn-primary mb-3">Submit Form</button>}
                                {hideSubmit && <button type="button" onClick={() => saveForm()} className="btn btn-primary mb-3">Save Form</button>}
                            </div>
                        </form>
        </div>
    );
};

export default Form;