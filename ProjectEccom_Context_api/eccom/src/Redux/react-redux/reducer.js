import { GET_CAMERA_DATA, GET_MOBILE_DATA } from "./constants";


const initialState ={
    globalmobileData :[],
    globalCameraData:[],
}


//action is a obj => payload, type  action:{type:"",payload:data}
export default function applicationReducer(state=initialState,action){

    switch (action.type) {

        case GET_MOBILE_DATA:
            return {
                ...state,
                globalmobileData: action.payload
            }
        case GET_CAMERA_DATA:
            return {
                ...state,
                globalCameraData: action.payload
            }
        default:
            return { ...state }
    }



}