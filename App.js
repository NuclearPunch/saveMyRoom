import React, {Component,createRef} from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {LoginReducer,UserTypeReducer, UserMetaReducer, JoinDataReducer} from 'src/Redux/Reducers/user.reducer'
import {CommonReducer, SearchKeyReducer
  ,TabBarVisibleReducer,TabBarRedDotHandler}
  from  'src/Redux/Reducers/common.reducer'

import AppContainer from 'src/NavConfig/NavigationConfig';
import getTheme from 'src/native-base-theme/components';
import platform from 'src/native-base-theme/variables/platform';
import { StyleProvider } from 'native-base';
import NavigationService from './src/NavConfig/NavigationService';
import Util from "src/Utils";

console.disableYellowBox = true;

const apiClient = axios.create({
  baseURL : Util.baseUrl,
  responseType:'json'
})


const reducers = combineReducers({ 
  LoginReducer, UserTypeReducer, UserMetaReducer, JoinDataReducer, CommonReducer,SearchKeyReducer,
  TabBarVisibleReducer,TabBarRedDotHandler
})

export const store = createStore(reducers,applyMiddleware(axiosMiddleware(apiClient)))

store.subscribe(()=>{
})

 export default class App extends Component{

  state={
    syncMessage : '',
    progress : '',
    updateComplete:false
   }

  constructor(props){
    super(props)
    this.page = createRef()

  }
  
  async componentDidMount() {
  
    NavigationService.setTopLevelNavigator(this.page)
    
  }



   render() {
    return (
      <>
    
       <Provider store={store}>
          <StyleProvider style={getTheme(platform)}>
          
            <AppContainer
              ref={navigatorRef => this.page = navigatorRef}
            />
            
          </StyleProvider>
       </Provider>
      </>
    );
  }
}

