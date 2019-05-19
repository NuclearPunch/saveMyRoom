export const FILE_SUCCESS = 'FILE_SUCCESS';
export const FILE_FAIL = 'FILE_FAIL';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAIL = 'CATEGORY_FAIL';

export function FileAction(data){
    return {
        type : 'FILE',
        payload: {
            request:{
                headers : {
                    'Content-Type': 'multipart/form-data',
                },
                method: 'POST',
                url:'/api/file/upload',
                data: data
            }
        }
    }
}


export function CategoryAction(data){
    return {
        type : 'CATEGORY',
        payload: {
            request:{
                method: 'GET',
                url:'/api/user/category',
                params: data
            }
        }
    }
}



export function SET_SEARCH_KEY(searchKey,){
    return {
        type: "SET_SEARCH_KEY",
        searchKey : searchKey,

    }
}



export function setChatPagePosition(from,to,offerId,reqId){
     return{
         type:'SET_CHAT_POSITION',
         from,to:String(to),offerId,reqId
     }
}




export function CHAT_USER_DATA(chatUserData){
    return {
        type: "CHAT_USER_DATA",
        chatUserData : chatUserData,

    }
}

export function hideTabBar(){
    return {
        type:'HIDE_TAB_BAR'
    }
}

export function showTabBar(){
    return {
        type:'SHOW_TAB_BAR'
    }
}


export function addMessage(title,content){
    return {
        type : 'ADD_MESSAGE',
        message:{
            title,content
        }
    }
}

export function getMessage(title){
    return {
        type : 'GET_MESSAGE',
        title
    }
}

export function readedMessage(data){

   // console.log('_______read message ________:',data)

    return {
        type : 'readedMessage',
        payload: {
            request:{
                method: 'PUT',
                url:'/api/hunting/chat',
                data
            }
        }
    }
}

export function lastMessage(mKey,userId){
    return {
        type:'lastMessage',
        payload: {
            request:{
                method: 'GET',
                url:'/api/hunting/lastChatMessage',
                params: {
                    mKey : mKey,
                    userId : userId
                }
            }
        }
    }
}


export function initChatPagePostion(){
    return {
        type : 'CHAT_POSITION_INIT'
    }
}

export function userInit(){
    return {
        type: 'SET_USER_INIT'
    }
}

export function UserMetaInit(){
    return {
        type: 'SET_USER_META_INIT'
    }
}

export function OfferInit(){
    return {
        type: 'SET_OFFER_INIT'
    }
}

export function UserTypeInit(){
    return {
        type: 'SET_USER_TYPE_INIT'
    }
}

export function ShowTabRedDot(item, cnt){
    return{
      type : 'SHOW_REDDOT',
      item,
        cnt,
    }
}

export function HideTabRedDot(item, cnt){
    return{
      type : 'HIDE_REDDOT',
      item,
        cnt,
    }
}

export function InitTabRedDot(){
    return {
        type : 'INIT_REDDOT',  
    }
}

export function ReadNewData(userId){
    return {
        type:'ReadNewData',
        payload: {
            request:{
                method: 'GET',
                url:'/api/hunting/newData',
                params: {
                    userId 
                }
            }
        }
    }
}


