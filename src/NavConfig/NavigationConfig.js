import { 
    createSwitchNavigator, 
    createStackNavigator,
    createBottomTabNavigator, 
    createAppContainer,
    StackActions } from 'react-navigation';

import React from 'react';
import TabBar from './Views/TabBottomBar';
import AuthLoadingScreen from './Views/AuthLoadingScreen';


import JoinInput from 'src/View/pages/join/JoinInput';
import JoinComplete from 'src/View/pages/join/JoinComplete';
import LoginInput from 'src/View/pages/login/LoginInput';
import LoginView from 'src/View/pages/login';
import Menu1 from 'src/View/pages/test/menu1';
import Home from 'src/View/pages/test/index';
import Menu2 from 'src/View/pages/test/menu2';

const Menu1Nav= createStackNavigator({ Menu1 });
const HomeNav= createStackNavigator({ Home });
const Menu2Nav= createStackNavigator({ Menu2 });

const TabBottomNavigator = createBottomTabNavigator({
       "메뉴1": { 
            screen: Menu1Nav ,
                navigationOptions:({navigation})=>{
                    
                    return {title:"메뉴1"}
                }
            },
        "홈": { 
            screen: HomeNav ,
                navigationOptions:({navigation})=>{
                    
                    return {title:"홈"}
                }
            },
        "메뉴2": { 
            screen: Menu2Nav ,
                navigationOptions:({navigation})=>{
                    
                    return {title:"메뉴2"}
                }
            }
            },{
                tabBarComponent: props => <TabBar {...props}/>,
                initialRouteName:'홈',
                tabBarOptions:{
                    tabStyle:{
                        height:47
                    }
                }
            })
       
            



const AuthStack = createStackNavigator({ Login: LoginView, LoginInput, JoinInput, JoinComplete,});

const SwitchNavigator = createSwitchNavigator({
   //AuthLoading : AuthLoadingScreen,
    AuthLoading : TabBottomNavigator,
   App: TabBottomNavigator,
   Auth: AuthStack,
},{
   initialRouteName:'AuthLoading'
})

export default createAppContainer(SwitchNavigator);



