
export function CommonReducer(state={value:null, error:null}, action){

    if(action.type.indexOf('SUCCESS') > -1){
        return {
            value : action.payload.data
        }
    }else if(action.type.indexOf('FAIL') > -1){
        return {
            error : action.error.response.data.message
        }
    }else{
        return state;
    }
}



export function SearchKeyReducer(state={searchKey:null, },action){

    switch(action.type){
        case 'SET_SEARCH_KEY':
            return {searchKey : action.searchKey, };
        
        default:
            return state;
    }
}


export function ChatPostionReducer(state={from:'',to:'',offer:'',reqId:''},action){
    if(action.type == 'SET_CHAT_POSITION'){
        return {
               from:action.from,
               to:action.to,
               offer:action.offerId,
               reqId:action.reqId}
    }else if(action.type == 'CHAT_POSITION_INIT'){
       return {from:'',to:'',offer:'',reqId:''}
    }else{
        return {...state}
    }
}

export function ChatDataReducer(state={chatUserData:null}, action){

    switch(action.type){
        case 'CHAT_USER_DATA':
            return {chatUserData : action.chatUserData, };

        default:
            return state;
    }

}


export function TabBarVisibleReducer(state={hide: false},action){
    if(action.type == 'HIDE_TAB_BAR'){
        return {hide:true}
    }else if(action.type == 'SHOW_TAB_BAR'){
        return {hide:false}
    }else{
        return {...state}
    }
}

export function ChatMessagesReducer(state={chats : new Map()},action){
    if(action.type == 'ADD_MESSAGE'){
        let {title,content} = action.message
        
         let messages = state.chats
        if(!messages.has(title)){
            messages.set(title,[])
        }
        messages.set(title,messages.get(title).concat(content)) 

        return  {chats : messages}
        //return {...state}
    }
    else if(action.type == 'GET_MESSAGE'){
        return {...state}
    }else{
        return{
        ...state
    }
    }
    
}

// export function TabBarRedDotHandler(state = {
//     redDots: new Map([[
//         'message', false
//     ], [
//         'reqList', false
//     ], [
//         'offerList', false
//     ]])
// }, action) {

//     switch(action.type){
//         case 'SHOW_REDDOT': return {redDots:state.redDots.set(action.item,true)}
//         case 'HIDE_REDDOT': return {redDots:state.redDots.set(action.item,false)}
//         default: return state
//     }

// }

export function TabBarRedDotHandler(state = {
    'message': {status: false, cnt: 0}, 'reqList': {status: false, cnt: 0}, 'offerList': {status: false, cnt: 0}
}, action) {
    switch(action.type){
        case 'SHOW_REDDOT': return Object.assign(state,{[action.item] :{status: true, cnt: action.cnt}})
        case 'HIDE_REDDOT': return Object.assign(state,{[action.item] :{status: false, cnt: action.cnt}})
        case 'INIT_REDDOT': return {
            'message': {status: false, cnt: 0}, 'reqList': {status: false, cnt: 0}, 'offerList': {status: false, cnt: 0}
        }
        default: return state
    }

}

// export function ChatMessagesReducer(state={chats : null},action){
//     if(action.type == 'ADD_MESSAGE'){
//         let {title,content}=action.message
//         state[title].concat(content)
//         return state
//     }
// }
