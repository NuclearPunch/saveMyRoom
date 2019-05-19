

export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const JOIN_FAIL = 'JOIN_FAIL';
export const META_SUCCESS = 'META_SUCCESS';
export const META_FAIL = 'META_FAIL';


export function JoinAction(data){
    return {
        type : 'JOIN',
        payload: {
            request:{
                method: 'POST',
                url:'/api/auth/register',
                data: data

            }
        }
    }
}

export function MetaAction(data){
    return {
        type : 'META',
        payload: {
            request:{
                method: 'PUT',
                url:'/api/user/userMeta',
                data: data

            }
        }
    }
}




export const GET_USER_META_TYPE = {type:"GET_USER_TYPE"};
export function SET_USER_META_TYPE(userType, userId, specialty){
    return {
        type: "SET_USER_META_TYPE",
        userType : userType,
        userId : userId,
        specialty: specialty,
    }
}

export const GET_JOIN_DATA = {type:"GET_JOIN_DATA"};
export function SET_JOIN_DATA(data){
    return {
        type: "SET_JOIN_DATA",
        data : data,
    }
}


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function LoginAction(email, password, fcm_token, isSns){
    return {
        type : 'LOGIN',
        payload: {
            request:{
                method: 'POST',
                url:'/api/auth/login',
                data: {
                    email,
                    password,
                    fcm_token,
                    isSns,
                }


            }
        }
    }
}

export const FINDPW_SUCCESS = 'FINDPW_SUCCESS';
export const FINDPW_FAIL = 'FINDPW_FAIL';

export function FindPWAction(email){
    return {
        type : 'FINDPW',
        payload: {
            request:{
                method: 'GET',
                url:'/api/user/findPW',
                data: {
                    email,
                }


            }
        }
    }
}




export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export function LogoutAction(userId, fcmToken){
    return {
        type : 'LOGOUT',
        payload: {
            request:{
                method: 'PUT',
                url:'/api/com/fcmToken',
                data: {
                    userId,
                    fcmToken,
                }


            }
        }
    }
}

export const GET_USER_TYPE = {type:"GET_USER_TYPE"};
export function SET_USER_TYPE(userType){
    return {
        type: "SET_USER_TYPE",
        userType : userType
    }
}

export function SET_USER_TOKEN(userToken){
    return {
        type: "SET_USER_TOKEN",
        userToken : userToken
    }
}


export function SET_USER_ID(userId){
    return {
        type: "SET_USER_ID",
        userId : userId
    }
}


export function SET_USER_FLAG(userFlag){
    return {
        type: "SET_USER_FLAG",
        userFlag : userFlag
    }
}





export function SET_USER_COMPANY_NAME(companyName){
    return {
        type: "SET_USER_COMPANY_NAME",
        companyName : companyName
    }
}




