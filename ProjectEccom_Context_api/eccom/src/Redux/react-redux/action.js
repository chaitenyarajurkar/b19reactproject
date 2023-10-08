import { GET_CAMERA_DATA, GET_MOBILE_DATA } from "./constants"


const setMobileDataredux =(apires)=>(dispatch)=>{

    dispatch({
        type:GET_MOBILE_DATA,
        payload:apires
    })

}

const setCameraDataredux =(apires)=>(dispatch)=>{

    dispatch({
        type:GET_CAMERA_DATA,
        payload:apires
    })
}

export {setMobileDataredux,setCameraDataredux};