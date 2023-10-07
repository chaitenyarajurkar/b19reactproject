import { GET_CAMERA_DATA, GET_MOBILE_DATA } from "./constants"


const setMobileData =(apires)=>(dispatch)=>{

    dispatch({
        type:GET_MOBILE_DATA,
        payload:apires
    })

}

const setCameraData =(apires)=>(dispatch)=>{

    dispatch({
        type:GET_CAMERA_DATA,
        payload:apires
    })
}

export {setMobileData,setCameraData};