import React,{Component} from 'react';
import {View,AsyncStorage} from 'react-native';
import {Spinner} from 'native-base';
import {connect} from 'react-redux';

class AuthLoadingScreen extends Component{
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('userId');
        const nickName = await AsyncStorage.getItem('nickName');
      
        if(userToken && nickName && userId 
        ){
           this.props.initState(nickName, userToken, userId)
           this.props.navigation.navigate('App');
        }
        else if((this.props.token && this.props.userId)){
            this.props.navigation.navigate('App');
        }
        else{
            this.props.navigation.navigate('Auth');
        }
        
        
      };

    render(){
        return(
            <View style={{backgroundColor:"#fff",flex:1,justifyContent:'center',alignItems:'center'}}>
              <Spinner color='yellow' />
            </View>
        )
    }
}


function InitUser( token, userId, nickName){
    return {
        type : 'INIT_USER_INF',
        userInf : {token, userId, nickName}
    }
}

function mapDispatchToProps(dispatch){
    return {
        initState : (token, userId, nickName) => dispatch(InitUser(token, userId, nickName))
    }
}

function mapStateToProps(state){
    return {
       token : state.UserTypeReducer.token,
       userId : state.UserTypeReducer.userId,
        nickName : state.UserTypeReducer.nickName,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthLoadingScreen)


