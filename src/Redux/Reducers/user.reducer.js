import {LOGIN_SUCCESS,LOGIN_FAIL} from 'src/Redux/Actions/user.action.js';


export function LoginReducer(state={value:null,error:null},action){
    //let value = state.value
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                value : action.payload.data
            };
        case LOGIN_FAIL:
            return {
                error : action.error.response.data.message
            };
        default:
            return state;
    }
}

export function UserTypeReducer(state={type: null, token: null, userId: null, userFlag: null, companyName: null, },action){
    let {type, token, userId, userFlag, companyName} = state
    switch(action.type){
        case 'GET_USER_TYPE':
            return state;
        case 'SET_USER_TYPE':
            return {type : action.userType, token:token, userId: userId, userFlag: userFlag, companyName:companyName};
        case 'SET_USER_TOKEN':
            return {token: action.userToken,type:type, userId: userId, userFlag: userFlag, companyName:companyName};
        case 'SET_USER_ID':
            return {userId: action.userId , token:token, type: type, userFlag: userFlag, companyName:companyName};
        case 'SET_USER_FLAG':
            return {userFlag: action.userFlag , userId: userId ,  token:token, type: type, companyName:companyName};
        case 'SET_USER_COMPANY_NAME':
            return {companyName: action.companyName, userFlag: userFlag , userId: userId ,  token:token, type: type};
        case 'INIT_USER_INF':
            return {...state,...action.userInf} ;
        case 'SET_USER_INIT':
            return {type: null, token: null, userId: null, userFlag: null, companyName: null}

        default:
            return state;
    }
}



export function UserMetaReducer(state={type:null, },action){
    let {type,} = state;
    switch(action.type){
        case 'GET_USER_TYPE':
            return state;
        case 'SET_USER_META_TYPE':
            return {type : action.userType, userId: action.userId, specialty: action.specialty };
        case 'SET_USER_META_INIT':
            return {type:null}    
        default:
            return state;
    }
}


export function JoinDataReducer(state={data:null, },action){
    let {data,} = state;


    switch(action.type){
        case 'GET_JOIN_DATA':
            return state;
        case 'SET_JOIN_DATA':
            return {data : action.data};
        default:
            return state;
    }
}